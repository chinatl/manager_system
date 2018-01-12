<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router >
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        icon: 'el-icon-menu',
                        index: 'JYPX1',
                        title: '新人业绩报表',
                        subs: [
                            {
                                index: 'JYPX1_01',
                                title: '新人培训覆盖统计'
                            },
                            {
                                index: 'JYPX1_02',
                                title: '新人主险件数统计'
                            },
                            {
                                index: 'JYPX1_03',
                                title: '新人主险举绩统计'
                            },
                            {
                                index: 'JYPX1_04',
                                title: '新人短线举绩统计'
                            },
                            {
                                index: 'JYPX1_05',
                                title: '新人综合举绩'
                            },
                            {
                                index: 'JYPX1_06',
                                title: '新人津贴获取统计'
                            },
                            {
                                index: 'JYPX1_07',
                                title: '新人增员统计'
                            },
                            {
                                index: 'JYPX1_08',
                                title: '新人增员覆盖统计'
                            },
                            {
                                index: 'JYPX1_09',
                                title: '新人晋升留存数据统计',
                            },
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '3',
                        title: '新人阶段成长报表',
                        subs: [
                            {
                                index: 'JYPX2_01',
                                title: '0-3月新人统计'
                            },
                            {
                                index: 'JYPX2_02',
                                title: '4-6月新人统计'
                            },
                            {
                                index: 'JYPX2_03',
                                title: '7-12月新人统计'
                            },
                        ]
                    },            
					{
                        icon: 'el-icon-menu',
                        index: '4',
                        title: '培训覆盖情况报表',
                        subs: [
                            {
                                index: 'JYPX3',
                                title: '培训覆盖率报表'
                            },
                        ]
                    },
                    {
                        icon: 'el-icon-star-on',
                        index: 'basecharts',
                        title: '培训班报表',
						  subs: [
                            {
                                index: 'none1',
                                title: '创业签约培训班签约率追踪'
                            }, {
                                index: 'none2',
                                title: '创业启航培训班效绩追踪'
                            }, {
                                index: 'none3',
                                title: '学员签到情况'
                            }, {
                                index: 'none4',
                                title: '培训签到整体情况'
                            }
                        ]
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: red;
    }
    .sidebar > ul {
        height:100%;
    }
	.is-opened li.is-active {
		background-color: rgba(255,255,255,.28);
	}
	.el-menu--dark {
		background-color: #242f42;
	}
	.el-menu-item {
		background-color: #324157
	}
	.el-menu--dark .el-submenu__title {
		color:#fff
	}
</style>
