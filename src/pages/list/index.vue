<template>
    <div>
        <fes-search-panel>
            <Wb-form :label-width="150" type="query">
                <Form-item label="姓名：">
                    <wb-input v-model="query.name" placeholder="请输入" />
                </Form-item>
                <Form-item label="身份证：">
                    <wb-input v-model="query.id" placeholder="请输入" />
                </Form-item>
            </Wb-form>
            <div slot="button">
                <Wb-button @click="search" type="primary" icon="search">
                    查询
                </Wb-button>
            </div>            
            <div v-show="error" class="error">
                    <Icon type="exclamation-circle" />{{error}}
                </div>

        </fes-search-panel>
        <fes-list-panel>
            <Wb-table :data="data">
                <Column prop="date" name="日期" />
                <Column prop="name" name="姓名" />
                <Column prop="age" name="年龄" />
                <Column prop="adr" name="地址" />
                <Column prop="status" name="等级" />
            </Wb-table>
            <Pagination :size="paginationOption.pageSize" :current="paginationOption.currentPage" :total="paginationOption.totalPage" @on-change="changePage" />
        </fes-list-panel>
    </div>
</template>
<script type="text/ecmascript-6">
export default {
    FesDataCache: 'test',
    FesData() {
        return {
            query: {
                name: '',
                id: ''
            },
            data: [{
                name: '张晓刚',
                age: 24,
                date: new Date(2016, 9, 10),
                adr: '北京市海淀区西二旗',
                status: 1
            }, {
                name: '李晓红',
                age: 26,
                date: new Date(2016, 9, 11),
                adr: '北京市海淀区西二旗',
                status: 2
            }, {
                name: '隔壁老王',
                age: 22,
                date: new Date(2016, 9, 12),
                adr: '北京市海淀区西二旗',
                status: 3
            }, {
                name: '我爸是李刚',
                age: 19,
                date: new Date(2016, 9, 13),
                adr: '北京市海淀区西二旗',
                status: 4
            }],
            paginationOption: {
                pageSize: 10,
                currentPage: 1,
                totalPage: 2
            },
            error : ''
        };
    },
    FesReady() {
        console.log(this);
    },
    methods: {
        changePage({ current, size }) {
            this.paginationOption.currentPage = current;
            this.paginationOption.pageSize = size;
        },
        search() {
            console.log("click search button ... , name is :", this.query.name);
            if( this.validate()  ){
                console.log("validate pass ");

            }else{
                console.log("validate FAILED ");
            }

            //query_search
            // this.FesApi.fetch('/api/v1/search/cms/keywords/add',{username:'a@163.com',password:'pass'}).then((res) => {
            //     // 默认跳入rolesConfig的第一项
            //     //this.FesApp.setRole(res);

            //     console.log("query_search res:", res);

            // });

            this.FesApi.fetch('/api/v1/search/cms/keywords/add',{username:'a@163.com',password:'pass'}).then( res => {
                // 默认跳入rolesConfig的第一项
                //this.FesApp.setRole(res);

                console.log("query_search res:", res);
                
            });


            //this.FesApp.router.push('/test');
        },


        validate() {
            // const { query_id } = this;
            // const { query_name } = this;
            //
            // if (this.query.id === '' || this.query.id == null) {
            //     this.error = '请输入用户名';
            //     return false;
            // }
            // if (query_name === '' || query_name == null) {
            //     this.error = '请输入密码';
            //     return false;
            // }
            return true;
        },


    }
};
</script>
