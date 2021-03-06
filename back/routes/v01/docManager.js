const Attr = require('../../models/attr');
const Info = require('../../models/info');

exports.getInfosList = (res) => {
	Info.find({parentId:null})
		.then(async (infoList)=>{
			console.log(infoList);

			let names = [];
			let ids = [];

			for(info of infoList){
				await names.push(info.name);
				await ids.push(info.id);
			}

			return res.json({
				state:true,
				msg:"Success",
				names:names,
				ids:ids
			})
		})
}

makeReadInfo = async (root,nodes,edges,rootCnt,edgeCnt)=>{

	for(c of root.childs){
		await Info.findOne({_id:c}).populate('attrs')
			.then(async (info)=>{
				await nodes.push({
					name:info.name,
					attrs:info.attrs,
					id:info._id,
					parentId:info.parentId
				})
				//await nodes.push(info);
				await edges.push([rootCnt,edgeCnt]);
				edgeCnt++;
				[nodes,edges,edgeCnt] = await makeReadInfo(info,nodes,edges,edgeCnt-1,edgeCnt);

				if(nodes==null||edges==null||edgeCnt==null)
					return [null,null,null]
			})
			.catch((err)=>{
				return [null,null,null]
			})

	}

	return [nodes,edges,edgeCnt]

	//return edgeCnt;
}

exports.readInfo = async (res,id)=>{
	let nodes = [];
	let edges = [];
	let edgeCnt = 1;

	Info.findOne({_id:id}).populate('attrs')
		.then(async (info)=>{
			await nodes.push({
				name:info.name,
				attrs:info.attrs,
				id:info._id,
				parentId:info.parentId
			});
			//await nodes.push(info);
			[nodes,edges,edgeCnt]=await makeReadInfo(info,nodes,edges,0,edgeCnt);

			if(nodes==null||edges==null||edgeCnt==null){
				return res.json({
					state:false,
					msg:"Can't make Info tree",
					nodes:[],
					edges:[]
				})
			}

			console.log(nodes);
			console.log(edges);

			return res.json({
				state:true,
				msg:'Success',
				nodes:nodes,
				edges:edges
			})
		})
		.catch((err)=>{
			return res.json({
				state:false,
				msg:"Info Not Found",
				nodes:[],
				edges:[]
			})
		})
	//console.log(ret)

}

exports.makeInfo = (res,infoName,parent) => {

	if(parent==null||parent==undefined)
	{
		Info.findOne({name:infoName})
			.then((info)=>{
				if(!info){
					let newInfo=new Info({
						name:infoName,
						attrs:[],
						childs:[],
						parentId:null
					})
					newInfo.save()
						.then((info)=>{
							return res.json({
								state:true,
								msg:'Success',
								id:info._id
							})
						})
				}
				else{
					return res.json({
						state:false,
						msg:'Same InfoName',
						id:null
					})
				}
			})
			.catch((err)=>{
				return res.json({
					state:false,
					msg:'InfoName failed',
					id:null
				})
			})
	} else {
		Info.findOne({_id:parent}).populate('childs')
			.then(async (parent)=>{
				if(!parent){
					return res.json({
						state:false,
						msg:'Parent Not found',
						id:null
					})
				}
				else
				{
					for(child of parent.childs){
						if(child.name==infoName){
							return res.json({
								state:false,
								msg:'Same infoName',
								id:null
							})
						}
					}
					let newInfo= new Info({
						name:infoName,
						attrs:[],
						childs:[],
						parentId:parent._id
					})
					await newInfo.save()
						.then(async (info)=>{
							await Info.findOneAndUpdate({_id:parent._id},{$push:{childs:info}})

							return res.json({
								state:true,
								msg:'Success',
								id:newInfo._id
							})
						})
						.catch((err)=>{
							return res.json({
								state:false,
								msg:'Save DB error',
								id:null
							})
						})
				}
			})
			.catch((err)=>{
				return res.json({
					state:false,
					msg:'ParentId error',
					id:null
				})
			})
	}

}

exports.makeAttr = (res,prefix,content,postfix,parentId)=>{

	Info.findOne({_id:parentId})
		.then((info)=>{
			let newAttr = new Attr({
				prefix,
				content,
				postfix,
				parentId:info._id
			})
			newAttr.save()
				.then(async (attr)=>{
					await Info.findOneAndUpdate({_id:info._id},{$push:{attrs:attr}})

					return res.json({
						state:true,
						msg:'Success',
						aid:attr._id
					})
				})
		})
		.catch((err)=>{
			return res.json({
				state:false,
				msg:'Info Not Found',
				id:null
			})
		})
}

exports.modifyInfo = (res,name,id)=>{

	console.log("dfdfdfdfadfdas")
	Info.findOne({_id:id})//.populate('parentId')
		.then(async (info)=>{
			console.log(info)
			console.log('-------------------------------------------ccc-')

			if(info.parentId!=null){
				Info.findOne({_id:info.parentId}).populate('childs')
					.then(async(parent)=>{
						for(child of parent.childs){
							if(child.name==name){
								return res.json({
									state:false,
									msg:'Same InfoName'
								})
							}
						}

						await Info.findOneAndUpdate({_id:info._id},{'name':name})
							.then((info)=>{
								return res.json({
									state:true,
									msg:'Success'
								})
							})
							.catch((err)=>{
								return res.json({
									state:false,
									msg:'Info Not Found or Update error'
								})
							})
					})
					.catch((err)=>{
						return res.json({
							state:false,
							msg:'Parent Not Found'
						})
					})
			} else {
				Info.find({parentId:null})
					.then(async(subjects)=>{
						for(info of subjects){
							if(info.name==name){
								return res.json({
									state:false,
									msg:'Same InfoName'
								})
							}
						}

						await Info.findOneAndUpdate({_id:id},{'name':name})
							.then((info)=>{
								return res.json({
									state:true,
									msg:'Success'
								})
							})
							.catch((err)=>{
								return res.json({
									state:false,
									msg:'Info Not Found or Update error'
								})
							})
					})
			}
		})
		.catch((err)=>{
			return res.json({
				state:false,
				msg:'Info Not Found'
			})
		})
}

exports.modifyAttr = (res,prefix,content,postfix,aid)=>{
	console.log('modi attr')
	Attr.findOneAndUpdate({_id:aid},{'prefix':prefix,'content':content,'postfix':postfix})
		.then((info)=>{
			console.log(info)
			return res.json({
				state:true,
				msg:'Success'
			})
		})
		.catch((err)=>{
			return res.json({
				state:false,
				msg:'Info Not Found or Update error'
			})
		})
}

exports.deleteInfo = (res,id,flag) => {
	console.log("c-------------------")
	Info.findOne({_id:id})
		.then(async (info)=>{
			if(info.parentId){
				Info.findOneAndUpdate({_id:info.parentId},{$pull:{'childs':{$in:[id]}}})
					.then(async(inf)=>{
						console.log('dd')
						for(c of info.childs){
							console.log('conunt')
							await this.deleteInfo(res,c,false)
						}

						console.log("de")
	
						for(a of info.attrs){
							await Attr.deleteOne({_id:a})
						}
						console.log("da")
						await Info.deleteOne({_id:id})
							.then(()=>{
								if(flag){
									return res.json({
										state:true,
										msg:'Success'
									})
								} else {
									return
								}	
							})
						.catch((err)=>{
							return res.json({
								state:false,
								msg:'Delete error'
							})
						})
					})
					.catch((err)=>{
						if(flag) console.log("root")
						return res.json({
							state:false,
							msg:'Parent Not Found'
						})
					})
			} else {
				for(c of info.childs){
					await this.deleteInfo(res,c,false)
				}

				for(a of info.attrs){
					await Attr.deleteOne({_id:a})
				}
				await Info.deleteOne({_id:id})
					.then(()=>{
						if(flag){
							return res.json({
								state:true,
								msg:'Success'
							})
						} else {
							return
						}
					})
					.catch((err)=>{
						return res.json({
							state:false,
							msg:'Delete error'
						})
					})
					
			}
		})
		.catch((err)=>{
			return res.json({
				state:false,
				msg:'Info Not Found'
			})
		})
}

exports.deleteAttr = (res,aid) => {
	Attr.findOne({_id:aid})
		.then((attr)=>{
			console.log(attr)
			Info.findOneAndUpdate({_id:attr.parentId},{$pull:{'attrs':{$in:[aid]}}})
				.then((info)=>{

					Attr.deleteOne({_id:aid})
						.then(async (attr)=>{

							return res.json({
								state:true,
								msg:'Success'
							})
						})
						.catch((err)=>{
							return res.json({
								state:false,
								msg:'remove failed'
							})
						})
				})
				.catch((err)=>{
					console.log(err)
					return res.json({
						stata:false,
						msg:'Parent Not Found'
					})
				})
		})
		.catch((err)=>{
			return res.json({
				state:false,
				msg:'Attr Not Found'
			})
		})
}

