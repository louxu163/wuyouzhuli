
// 模拟的一个promise请求
const getBlogList = function (paramse) {
    return new Promise((resolve, reject) => {

//=================================================================================================================================================================				
				var ccc ='{"status":"success","totals":"50","Radio":{"option1":"9","option2":"0","option3":"0","option4":"2","option5":"0","option6":"0","option7":"0","option8":"0","option9":"0","option10":"0","option11":"0","option12":"0","option13":"0","option14":"0"},"data":[{"goods_id":"262563609849","order_image":"https://img.pddpic.com/open-gw/2021-07-18/d50a1e56ff2ba93ef18dbc7935696866.jpeg","order_sn":"211014-450137967463758","remark":"","confirm_time":"2021-10-14 15:51:01","last_ship_time":"2021-10-16 15:51:08","mall_name":"可可的小心思","goods_name":"新款针织发带时尚淑女束发头带条纹蝴蝶结交叉发带韩版发饰发带","pay_amount":"16.63","goods_spec":"卡其色","goods_count":"1","source_id":"tb_619505312194","order_status":"待发货","bendi_tag":"","receiver_name":"莫*林","receiver_phone":"15*******02","province":"广西壮族自治区","city":"玉林市","town":"兴业县"},{"goods_id":"262563609849","order_image":"https://img.pddpic.com/open-gw/2021-07-18/8a61d6c11a619866d8bad9b3a3642bb4.jpeg","order_sn":"211014-027603802891861","remark":"","confirm_time":"2021-10-14 15:57:15","last_ship_time":"2021-10-16 15:57:40","mall_name":"可可的小心思","goods_name":"新款针织发带时尚淑女束发头带条纹蝴蝶结交叉发带韩版发饰发带","pay_amount":"8.29","goods_spec":"军绿色","goods_count":"1","source_id":"tb_619505312194","order_status":"待发货","bendi_tag":"","receiver_name":"**经","receiver_phone":"17*******90","province":"福建省","city":"宁德市","town":"古田县"}]}'
				//resolve(ccc);
		if(typeof eCallFunction === "function") {
		var form_Data = 'type=table_content';
        for (let key in paramse) {
            if(form_Data !== '') {
                form_Data += '&';
            }
            form_Data += key + '=' + paramse[key];        }

			form_Data +='&option=' + $(".Radio input:checked")[0].id;
			 eCallFunction('jiazai_shuju',form_Data,'参数二',function(data){
			//console.log(data);
			resolve(data);	
			})

		}
				

//=================================================================================================================================================================	
        // 一个简单的处理参数的示例

/*         let formData = '';
        for (let key in paramse) {
            if(formData !== '') {
                formData += '&';
            }
            formData += key + '=' + paramse[key];
        }
		
        xhr.send(formData); */
    });
};

window.Vue.use(window.GridManager);

const gridManagerName = 'testVue';
new window.Vue({
    el: '#app',
    data: {

        // 表单数据
        searchForm: {
            title: '',
            type: '3',
            content: ''
        },

        // 分类 list
        TYPE_LIST: [
            {value: '1', text: 'HTML/CSS'},
            {value: '2', text: 'nodeJS'},
            {value: '3', text: 'javaScript'},
            {value: '4', text: '前端鸡汤'},
            {value: '5', text: 'PM Coffee'},
            {value: '6', text: '前端框架'},
            {value: '7', text: '前端相关'}
        ],

        // 分类 map
        TYPE_MAP () {
            let TYPE_MAP = {};
            this.TYPE_LIST.forEach(item => {
                TYPE_MAP[item.value] = item.text;
            });
            return TYPE_MAP;
        },

        // 公开方法列表
        GM_PUBLISH_METHOD_MAP: {
                get: {
                key: 'get',
                relyInit: true,  // 是否依赖init方法
                title: '获取表格的实时配置信息',
                code: 'this.$refs["grid"].$el.GM("get");'
            },
            version: {
                key: 'version',
                relyInit: false,
                title: '获取当前GridManager的版本号',
                code: 'this.$refs["grid"].$el.GM("version");'
            },
            getLocalStorage: {
                key: 'getLocalStorage',
                relyInit: true,
                title: '获取表格用户记忆',
                code: 'this.$refs["grid"].$el.GM("getLocalStorage");'
            },
            resetLayout: {
                key: 'resetLayout',
                relyInit: true,
                title: '重置表格布局',
                code: 'this.$refs["grid"].$el.GM("resetLayout", "800px", "500px");'
            },
            clear: {
                key: 'clear',
                relyInit: true,
                title: '清除表格记忆数据',
                code: 'this.$refs["grid"].$el.GM("clear");'
            },
            getRowData: {
                key: 'getRowData',
                relyInit: true,
                title: '获取指定tr所使用的数据',
                code: 'this.$refs["grid"].$el.GM("getRowData", document.querySelector("table[grid-manager=testVue] tbody tr"));'
            },
            updateRowData: {
                key: 'updateRowData',
                relyInit: true,
                title: '更新指定行所使用的数据',
                code: 'this.$refs["grid"].$el.GM("updateRowData", "id", {"id": 92, "title": "ccc"});'
            },
            setSort: {
                key: 'setSort',
                relyInit: true,
                title: '手动设置排序',
                code: 'this.$refs["grid"].$el.GM("setSort", {createDate: "ASC"});'
            },
            setConfigVisible: {
                key: 'setConfigVisible',
                relyInit: true,
                title: '设置表头配置区域可视状态',
                code: 'this.$refs["grid"].$el.GM("setConfigVisible", true);'
            },
            showTh: {
                key: 'showTh',
                relyInit: true,
                title: '设置列为可视状态',
                code: 'this.$refs["grid"].$el.GM("showTh", "pic");'
            },
            hideTh: {
                key: 'hideTh',
                relyInit: true,
                title: '设置列为隐藏状态',
                code: 'this.$refs["grid"].$el.GM("hideTh", "pic");'
            },
            exportGridToXls: {
                key: 'exportGridToXls',
                relyInit: true,
                title: '导出指定表格',
                code: 'this.$refs["grid"].$el.GM("exportGridToXls", "demo中使用的导出");'
            },
            setQuery: {
                key: 'setQuery',
                relyInit: true,
                title: '更改在生成组件时所配置的参数query',
                code: 'this.$refs["grid"].$el.GM("setQuery", {"userName":"baukh","sex":"男"});'
            },
            setAjaxData: {
                key: 'setAjaxData',
                relyInit: true,
                title: '用于再次配置ajaxData数据',
                code: 'this.$refs["grid"].$el.GM("setAjaxData", {data: [], totals: 0});'
            },
            refreshGrid: {
                key: 'refreshGrid',
                relyInit: true,
                title: '刷新表格',
                code: 'this.$refs["grid"].$el.GM("refreshGrid",aaa);'
				//console.log(this);
            },
            getCheckedTr: {
                key: 'getCheckedTr',
                relyInit: true,
                title: '获取当前选中的行',
                code: 'this.$refs["grid"].$el.GM("getCheckedTr");'
            },
            getCheckedData: {
                key: 'getCheckedData',
                relyInit: true,
                title: '获取选中行的渲染数据',
                code: 'this.$refs["grid"].$el.GM("getCheckedData");'
            },
            setCheckedData: {
                key: 'setCheckedData',
                relyInit: true,
                title: '设置选中的数据',
                code: 'this.$refs["grid"].$el.GM("setCheckedData", []);'
            },
            cleanData: {
                key: 'cleanData',
                relyInit: true,
                title: '清除指定表格数据',
                code: 'this.$refs["grid"].$el.GM("cleanData");'
            },
            destroy: {
                key: 'destroy',
                relyInit: true,
                title: '消毁指定的GridManager实例',
                code: 'this.$refs["grid"].$el.GM("destroy");'
            }
        },

        // 执行提示
        fnRunInfo: '',

        // 当前选中的公开方法
        fnSelected: '-1',

        // 公开方法code
        fnCode: '',

        // 当前是否已经实例化
        inited: false,

        // github地址
        github: 'https://github.com/baukh789',

        // 初始化按纽禁用标识
        initDisabled: true,

        // 销毁按纽禁用标识
        destroyDisabled: true,

        // 表格渲染回调函数
        // query为gmOptions中配置的query
        callback: function(query) {
            this.inited = true;
        },

        // GM所需参数
        option: {
            supportRemind: true,
            gridManagerName:'test',
            width: '100%',
            height: '100%',
            supportSorting: true,
            ajaxData: (settings, parsme) => {
			var html_post =	getBlogList(parsme);
                return html_post ;

            },
            ajaxType: 'POST',
            supportMenu: true,
            query: {test: 22},
            pageSize: 50,

			//支持列的拖拽功能
			supportDrag: false,
            // 右键菜单
             supportMenu: false,
			
			
          // 初始渲染时是否加载数据
            // firstLoading: false,

            // 是否使用无总条数模式
            // useNoTotalsMode: true,
            // 是否开启分页
            supportAjaxPage: true,
            // 排序模式，single(升降序单一触发) overall(升降序整体触发)
            sortMode: 'single',

            // 是否开启配置功能
             supportConfig: true,

            // 是否开启导出
            // supportExport: false,

            // 禁用行
            // disableLine: true,

            // 组合排序
            // isCombSorting: true,

            // 合并排序
            // mergeSort: true,

            // 禁用边框线
            // disableBorder: true,

            // 选择框配置
            checkboxConfig: {
                // 使用单选
                // useRadio: true,

                // 使用行选中
                // useRowCheck: true,

                // 复选时最大可选数
                // max: 2
            },
            // 使用单选
            // useRadio: true,

            // 使用行选中
            // useRowCheck: true,

            // 图标跟随文本
            // isIconFollowText: true,
            // 禁用缓存
            disableCache: false,

            columnData: [
                {
                    key: 'pic',
                    //remind: '这一列显示了缩略图，可以通过点击跳转至对应的博客地址',
                    width: '90px',
                    align: 'center',
                    text: '主图',
                    // 使用函数返回 dom node
                   template: function (pic, row) {

                        var imgNode = document.createElement('img');
                        imgNode.style.width = '80px';
                        imgNode.style.margin = '0 auto';
                        imgNode.alt = row.title;
                        imgNode.src = row.order_image;
						//console.log(row.order_image);
					return "<p><img class='shangpin_tu' src='"+imgNode.src+"' alt='描述' width='80px' height='100px' style=' width: 80px; height: 80px;'></p><p class='layui-table-cell laytable-cell-1'><p><a href='javascript:;' class='goods_id'>"+row.goods_id+"</a></p></p>";
						
                    } 
					
                }, {
                    key: 'title',
                    remind: 'the title',
                    align: 'left',
                    text: '下单时间/状态',
					
					template: (action, row) => {
                        return "<div class='layui-table-cell laytable-cell-2'><p><b>订单号：<a href='javascript:;' class='dingdanhao'>"+row.order_sn+"</a></b></p><p>成团时间：<font color='blue' class='chengtuan_shijian'>"+row.confirm_time+"</font></p><p>承诺发货：<font color='blue' class='fahuo_shijian'>"+row.last_ship_time+"</font></p><p><b><a href='javascript:;'><font style='color: #e05611fc;' mall_id='1234348'>【<span class='dianpuming'>"+row.mall_name+"</span>】</font></a></b><a href='javascript:;'><font color='#666' style='white-space:normal' class='shangpinming' goods_id='"+row.goods_id+"'>"+row.goods_name+"</font></a></p></div>";
                    }

                }, {
                    key: 'type',

                    text: '规格/数量',
                    align: 'center',
                    width: '110px',
					template:(action, row) => {
						var goods_spec =row.goods_spec;
						var goods_spec =goods_spec.replace('/-/', '-');
						return "<div class='layui-table-cell laytable-cell-3' style='text-align:center;'><p>"+goods_spec+"</p><p>×<sapn>1</sapn></p><a href='javascript:;'><p class='duishou'>"+row.source_id+"</p></a></div>"}

                }, {
                    key: 'info',
                    remind: 'the info',
                    width: '100px',
                    text: '采购',
					align: 'center',
					template:(action, row) => {
						var order_status=row.order_status;
						if(order_status=='待发货'){
							var status_class="layui-btn layui-btn-sm caigou"
						}else{
							var status_class="layui-btn layui-btn-sm caigou cant-see"	
						};
					return "<div class='layui-table-cell laytable-cell-4'><p style='color:#ff8300;font-size:20px;'>￥<span>"+row.pay_amount+"</span></p><p><a class='"+status_class+"' lay-event='edit'><i class='layui-icon logo_che' style='display: inline;background-image: url(./tm/img/gwc.png);background-size: cover;font-size:15px;text-decoration:none'>&nbsp&nbsp&nbsp&nbsp&nbsp</i>采购</a></p></div>"}
					
                },  {
                    key: 'createDate',
                    width: '125px',
                    text: '订单状态',
                    align: 'center',
                    // 使用函数返回 htmlString
                    template:(action, row) => {
						var order_status=row.order_status;
						var caigou_status=''
						if(row.caigou_status==2 && row.out_sn!=''){
							caigou_status="<a href='javascript:;'><p class='duishou_order' style='white-space:normal;padding-left: 10px;padding-right: 10px;'>"+row.out_sn+"</p></a>"
						};

						if(order_status=='待发货'){
						var shoudong='shoudong_fahuo'
							return caigou_status+"<div class='layui-table-cell laytable-cell-5 ' style=''>"+row.order_status+"</div><a href='javascript:;'><p class='shoudong_fahuo' style='color:#009688;font-weight:bold;'>手动发货</p></a>"
							}else{
							return "<div class='layui-table-cell laytable-cell-5'>"+row.order_status+"</div>"}
						}


                }, {
                    key: 'lastDate',
                    width: '160px',
                    text: '商家备注/买家留言',
					align: 'center',
                    template:(action, row) => {
					return "<div class='layui-table-cell laytable-cell-6'><span style='color: #009688;white-space:normal'>"+row.remark+"</span><a href='javascript:;'><p class='tianjia_shangbei'>添加商家备注</p></a></div>"}

                }, {
                    key: 'action',
                    width: '160px',
                    align: 'center',
                    //disableCustomize: true,
                    text: '本地备注',
					template:(action, row) => {
					return "<div class='layui-table-cell laytable-cell-7'><span style='color: #009688;white-space:normal'>"+row.bendi_tag+"</span><a href='javascript:;'><p class='tianjian_benbei'>添加本地备注</p></a></div>"}
               
				}, {
                    key: 'shouhuoren',
                    width: '160px',
                    text: '收货人',
					align: 'center',
                    template:(action, row) => {
					return "<div class='layui-table-cell laytable-cell-8' style='text-align:center;'><span>"+row.receiver_name+"</span><a href='javascript:;'><div class='lock_xinming logo_suo' style='display: inline;background-image: url(./tm/img/s.png);background-size: contain;font-size:15px'>&nbsp;&nbsp;&nbsp;&nbsp;</div></a><br><span>"+row.receiver_phone+"</span><a href='javascript:;'><div class='lock_dianhua logo_suo' style='display: inline;background-image: url(./tm/img/s.png);background-size: contain;font-size:15px'>&nbsp;&nbsp;&nbsp;&nbsp;</div></a></div>"
                }
				}, {
                    key: '收货地址',
                    width: '185px',
                    align: 'center',
                    //disableCustomize: true,
                    text: '收货地址',
                    template:(action, row) => {
					return "<div class='laytable-cell-9' style='text-align:center;white-space:normal;'><span>"+row.province+"&nbsp"+row.city+"&nbsp"+row.town+"</span><a href='javascript:;'><div class='lock_dizhi logo_suo' style='display: inline;background-image: url(./tm/img/s.png);background-size: contain;font-size:15px'>&nbsp;&nbsp;&nbsp;&nbsp;</div></a></div>"}
                }				
				
				
            ],
            // 排序后事件
            sortingAfter: function (data) {
                console.log('sortAfter', data);
				
            },
			
			//全选/反选, 执行后事件
            checkedAllAfter: function (data) {
                //console.log('checkedAllAfter', data);
            },
			//选中/取消选中行, 执行后事件
			checkedAfter: function (checkedList,isChecked,rowData) {
                //console.log('checkedAfter', checkedList.length);
                //console.log('checkedAllAfter', isChecked);
                //console.log('checkedAllAfter', rowData);
				
            },
			//表格单条的click事件勾子
			rowClick: function (row,rowIndex,tr,cc) {
                //console.log(row, rowIndex,tr);
            },
			cellClick: function (row,rowIndex,colIndex,td,cc) {
				//console.log(row,rowIndex,colIndex,td,cc);
			
			}
			
        }
    },
    methods: {
        // 测试vue下的GM事件
        delectRow: function (row, index) {
            if(window.confirm(`确认要删除当前页第[${index}]条的['${row.title}]?`)){
                console.log('----删除操作开始----');
                this.$refs['grid'].$el.GM('refreshGrid');
                console.log('数据没变是正常的, 因为这只是个示例,并不会真实删除数据.');
                console.log('----删除操作完成----');
                console.log('');
            }
        },

        // 事件: 搜索
        onSearch: function () {
            var params = Object.assign({cPage: 1}, this.searchForm);
            this.$refs['grid'].$el.GM('setQuery', params, function () {
                console.log('setQuery执行成功');
            });
        },

        // 事件: 重置
        onReset: function () {
            this.searchForm = {
                title: '',
                type: '-1',
                content: ''
            };
        },

        // 事件: 初始化
        onInit: function () {
            this.$refs['grid'].$el.GM('init', this.option);
            this.initDisabled = true;
            this.destroyDisabled = false;
        },

        // 事件: 销毁
        onDestroy: function () {
            this.$refs['grid'].$el.GM('destroy');
            this.initDisabled = false;
            this.destroyDisabled = true;
        },

        // 切换执行方法事件
        onFnChange(fnSelected) {
            this.fnSelected = fnSelected;
            this.fnCode = this.GM_PUBLISH_METHOD_MAP[fnSelected] ? this.GM_PUBLISH_METHOD_MAP[fnSelected].code : '';
        },

        // 执行方法事件
        onFnRun() {
            if (this.fnSelected === '-1') {
                return;
            }
            const selectedFN = this.GM_PUBLISH_METHOD_MAP[this.fnSelected];
            try {
                const log = eval(this.fnCode);
                console.group(selectedFN.key);
               // console.log(this.fnCode);
                //console.log(log);
                console.groupEnd();
                if (selectedFN.key === 'init') {
                    this.inited = true;
                }
                if (selectedFN.key === 'destroy') {
                    this.inited = false;
                }
                this.fnRunInfo = `<span class="success-info">
                    <a href="http://gridmanager.lovejavascript.com/api/index.html#${selectedFN.key}" target="_blank">${selectedFN.key}</a>
                    执行成功, 请打开控制台查看具体信息
                </span>`;
            } catch (e) {
                this.fnRunInfo = `<span class="error-info">
                    <a href="http://gridmanager.lovejavascript.com/api/index.html#${selectedFN.key}" target="_blank">${selectedFN.key}</a>
                    执行失败, 请打开控制台查看具体信息
                </span>`;
                console.error('执行错误: ', e);
            }
        }
    },

    // 创建完成
    created: function () {
        this.initDisabled = true;
        this.destroyDisabled = false;
    }
});

(function(){
        var gm = function(elem){
            return function(){
                var name = arguments[0];
                arguments[0] = elem;
                return GridManager.default[name].apply(GridManager,arguments);
            }
        }
        var temp = null;
        Object.defineProperty(window,"GM",{
            get(){
                if(!temp){
                    var elem = document.querySelector("table");
                    if(elem){
                        temp = gm(elem);
                    }
                };  
                return temp
            }
        })
    })()

    $(function(){
function charu_shangpin (html){
            var html = $(html)
            $('#leibiao_body tbody').append(html);
			//$('.logo_suo').text(tubiao_suo);
			//$('.logo_che').text(tubiao_che);
			$('.layui-icon-ok').text(tubiao_gou);
			
            //取消全选
            $('#checkAll').prop('checked',false);
}
        //初始化
		
		
        function initTable() {
            $('.lianxucaigou').on('click',function(event){
				
				
				if( $(event.target).hasClass('lianxucaigou')||$(event.target).hasClass('logo_che')){	

              var data_obj= GM("getCheckedData");
			  
			  //var json_obj = JSON.parse("{}");
			  //json_obj["json_type"]="lianxucaigou"
			  //json_obj.data=data_obj
			 var data_json= JSON.stringify(data_obj);
			 huidiao_hanshu('lianxucaigou',data_json)	;
			 
			  
			  for (var a=0;a<data_obj.length;a++){
				 //console.log(a, data_obj[a].order_sn);
				 //
			  }};	

			})



            $('tbody').on('click',function(event){
                checks = $('input[name="layTableCheckbox"]');
				
				//============================================================================选中按钮
				if( $(event.target).hasClass('layui-icon-ok')){
				
				if( $(event.target).hasClass('quan_xuan')){
				var xuanzhong =$(event.target).closest(".layui-form-checkbox").siblings("input").prop('checked')
				if(xuanzhong){
				$(event.target).closest(".layui-form-checkbox").removeClass("layui-form-checked");
				$(event.target).closest(".layui-form-checkbox").siblings("input").prop('checked',false)
				$('input[type="checkbox"]').not(".quan_xuan").prop('checked',false);
				$(".layui-form-checkbox:not(.quan_xuan)").removeClass("layui-form-checked");

				}else{

				$('input[type="checkbox"]').not(".quan_xuan").prop('checked',true);
				$(".layui-form-checkbox:not(.quan_xuan)").addClass("layui-form-checked");
				}				

				}else{
				
				var xuanzhong =$(event.target).closest(".layui-form-checkbox").siblings("input").prop('checked')

				if(xuanzhong){
				
				$(event.target).closest(".layui-form-checkbox").removeClass("layui-form-checked");
				$(event.target).closest(".layui-form-checkbox").siblings("input").prop('checked',false)
				}else{
				$(event.target).closest(".layui-form-checkbox").addClass("layui-form-checked");
				$(event.target).closest(".layui-form-checkbox").siblings("input").prop('checked',true)
				}
				    if(checks.length == $(".layui-table-body input[type='checkbox']:checked").length){
                    checkAll.prop('checked',true);
					checkAll.next(".layui-form-checkbox").addClass("layui-form-checked");
                    }else{
                     checkAll.prop('checked',false);
					checkAll.next(".layui-form-checkbox").removeClass("layui-form-checked");
                    }
				
				}}
				
				
				if( $(event.target).hasClass('goods_id')){	
				var goods_id=$(event.target).text();
				huidiao_hanshu('goods_id',goods_id);
				};
				if( $(event.target).hasClass('shangpinming')){	
				var goods_id=$(event.target).attr("goods_id");
				huidiao_hanshu('shangpinming',goods_id);
				//alert("商品ID："+goods_id);
				};
				if( $(event.target).hasClass('dianpuming')){	
				var dianpuming = $(event.target).text();
				huidiao_hanshu('dianpuming',dianpuming)	;			
				};
				if( $(event.target).hasClass('dingdanhao')){
				var dingdanhao = $(event.target).text()
				huidiao_hanshu('dingdanhao',dingdanhao)	;
				};
				if( $(event.target).hasClass('caigou')||$(event.target).hasClass('logo_che')){
					
				var dingdanhao = $(event.target).parents("tr").find(".dingdanhao").text();
				
				var data = GM('getRowData',$('tr:contains('+dingdanhao+')')[0]);
				var data_json= JSON.stringify(data);
				huidiao_hanshu('caigou',data_json)	;
				//alert("采购："+dingdanhao);
				};

				console.log($(event));
				if( $(event.target).hasClass('lock_xinming')){	
				var dingdanhao = $(event.target).parents("tr").find(".dingdanhao").text();
				var mall_name = $(event.target).parents("tr").find(".dianpuming").text();
				huidiao_hanshu('lock_xinming',dingdanhao,mall_name)	;
				//alert("姓名解锁，订单号："+dingdanhao);
				};				
				if( $(event.target).hasClass('lock_dianhua')){	
				var dingdanhao = $(event.target).parents("tr").find(".dingdanhao").text();
				var mall_name = $(event.target).parents("tr").find(".dianpuming").text();
				huidiao_hanshu('lock_dianhua',dingdanhao,mall_name)	;
				//alert("号码解锁，订单号："+dingdanhao);
				};	
				if( $(event.target).hasClass('lock_dizhi')){	
				var dingdanhao = $(event.target).parents("tr").find(".dingdanhao").text();
				var mall_name = $(event.target).parents("tr").find(".dianpuming").text();
				huidiao_hanshu('lock_dizhi',dingdanhao,mall_name)	;
				//alert("地址解锁，订单号："+dingdanhao);
				};	
				if( $(event.target).hasClass('chakan_dingdan')){	
				var dingdanhao = $(event.target).parents("tr").find(".dingdanhao").text();
				huidiao_hanshu('chakan_dingdan',dingdanhao)	;
				//alert("查看订单："+dingdanhao);
				};	
				if( $(event.target).hasClass('tianjia_shangbei')){	
				var dingdanhao = $(event.target).parents("tr").find(".dingdanhao").text();
				var mall_name=$(event.target).parents("tr").find(".dianpuming").text();
				huidiao_hanshu('tianjia_shangbei',dingdanhao,mall_name)	;
				//alert("添加商家备注："+dingdanhao);
				};	
				if( $(event.target).hasClass('tianjian_benbei')){	
				var dingdanhao = $(event.target).parents("tr").find(".dingdanhao").text();
				huidiao_hanshu('tianjian_benbei',dingdanhao)	;
				//alert("添加本地备注："+dingdanhao);
				};	

				if( $(event.target).hasClass('duishou')){
				var duishou_ID = $(event.target).text();
				var goods_id=$(event.target).parents("tr").find(".goods_id").text();
				huidiao_hanshu('duishou',duishou_ID,goods_id)	;
				//alert("对手ID："+duishou_ID);
				};	
				if( $(event.target).hasClass('shoudong_fahuo')){
				var dingdanhao = $(event.target).parents("tr").find(".dingdanhao").text();
				var mall_name=$(event.target).parents("tr").find(".dianpuming").text();
				huidiao_hanshu('shoudong_fahuo',dingdanhao)	;
				//alert("对手ID："+duishou_ID);
				};	
				if( $(event.target).hasClass('duishou_order')){
				var dingdanhao = $(event.target).parents("tr").find(".dingdanhao").text();
				var mall_name=$(event.target).parents("tr").find(".dianpuming").text();
				huidiao_hanshu('duishou_order',dingdanhao)	;
				//alert("对手ID："+duishou_ID);
				};	

            });
        }

        initTable();


    });

function huidiao_hanshu (type,a,b,c){
if(type=="goods_id"){
var goods_id=a;
eCallFunction('myFunction',"goods_id",goods_id)
};
if(type=="shangpinming"){
var goods_id=a;
eCallFunction('myFunction',"shangpinming",goods_id)
};

if(type=="dianpuming"){
var dianpuming=a
eCallFunction('myFunction',"dianpuming",dianpuming);
};
if(type=="dingdanhao"){
var dingdanhao=a
eCallFunction('myFunction',"dingdanhao",dingdanhao);
};
if(type=="caigou"){
var data=a;
eCallFunction('myFunction',"caigou",data);
};
if(type=="lock_xinming"){
var dingdanhao=a
var mall_name=b
eCallFunction('myFunction',"lock_xinming",dingdanhao,mall_name);

};
if(type=="lock_dianhua"){
var dingdanhao=a
var mall_name=b
eCallFunction('myFunction',"lock_dianhua",dingdanhao,mall_name);
};
if(type=="lock_dizhi"){
var dingdanhao=a
var mall_name=b
eCallFunction('myFunction',"lock_dizhi",dingdanhao,mall_name);
};
if(type=="chakan_dingdan"){
var dingdanhao=a
eCallFunction('myFunction',"chakan_dingdan",dingdanhao);
};
if(type=="tianjia_shangbei"){
var dingdanhao=a
var mall_name=b
eCallFunction('myFunction',"tianjia_shangbei",dingdanhao,mall_name);
};
if(type=="tianjian_benbei"){
var dingdanhao=a
eCallFunction('myFunction',"tianjian_benbei",dingdanhao);
};

if(type=="duishou"){
var duishou_ID=a
var goods_id=b
eCallFunction('myFunction',"duishou",duishou_ID,goods_id);
};
if(type=="shoudong_fahuo"){
var dingdanhao=a
var mall_name=b
eCallFunction('myFunction',"shoudong_fahuo",dingdanhao,mall_name);
};
if(type=="duishou_order"){
var dingdanhao=a
var mall_name=b
eCallFunction('myFunction',"duishou_order",dingdanhao);
};
if(type=="lianxucaigou"){
var json_data=a
eCallFunction('myFunction',"lianxucaigou",json_data);
};



//console.log(type);
}

var tubiao_suo = "&#128274;"
var tubiao_che="&#128722;"
var tubiao_gou="&#8730;"

function charu_shangpin (html){
            var html = $(html)
            $('#leibiao_body tbody').append(html);
			$('.logo_suo').text(tubiao_suo);
			$('.logo_che').text(tubiao_che);
			$('.layui-icon-ok').text(tubiao_gou);
			
            //取消全选
            $('#checkAll').prop('checked',false);
}




/*  $('.jiazai-button').on('click',function(event){
 
 charu_shangpin(html);
 })
for(var a=0;a<10;a++){
 charu_shangpin(html);
}
 */

function xuanze_tb_type_id (a,b,c){
var sku_li = document.getElementsByClassName("J_TSaleProp")
    var len = sku_li.length;
    for (var i=0; i<len; i++) {
	li_text=""
	if(i==0){
	li_text=a;
	}else if(i==1){
	li_text=b;
	}else if(i==2){
	li_text=c;}
	var sku_li_li = sku_li[i].getElementsByTagName("li")
    for (var n=0; n<sku_li_li.length; n++) {
	if( !sku_li_li[n].classList.contains("tb-selected")){
	var Text = sku_li_li[n].getAttribute("data-value");
	if(li_text!="" && Text==li_text){
	    sku_li_li[n].click();	
	}	}}}}