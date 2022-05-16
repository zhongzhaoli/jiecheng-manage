/*
 * @Author: Custer
 * @Date: 2021-11-15 14:43:49
 * @LastEditors: Custer
 * @LastEditTime: 2022-04-07 17:29:09
 * @Description: file content
 */
const list = [
  {
    path: '/',
    name: 'Index',
    component: 'Layout',
    meta: {
      title: '看板',
      icon: 'dashboard-line',
      breadcrumbHidden: true,
    },
    children: [
      {
        path: '',
        name: 'Index-Dashboard',
        component: '@/views/index/dashboard',
        meta: {
          title: '看板',
          icon: 'dashboard-line',
          noClosable: true,
          hidden: true
        },
      },
    ],
  },
  {
    path: "operateTeam",
    name: "OperateTeam",
    component: 'Layout',
    meta: {
      title: "运营团队",
      icon: "service-line"
    },
    children: [
      {
        path: "list",
        name: "OperateTeam-List",
        component: '@/views/operateTeam/list/index',
        meta: {
          title: "运营团队列表",
          icon: "list-unordered"
        }
      },
      {
        path: "settlement",
        name: "OperateTeam-Settlement",
        component: '@/views/operateTeam/settlement/index',
        meta: {
          title: "结算申请",
          icon: "currency-line"
        }
      }
    ]
  },
  {
    path: "member",
    name: "Member",
    component: 'Layout',
    meta: {
      title: "平台会员",
      icon: "user-line"
    },
    children: [
      {
        path: "list",
        name: "Member-List",
        component: '@/views/member/list/index',
        meta: {
          title: "会员列表",
          icon: "list-unordered"
        }
      },
      {
        path: "integral",
        name: "Member-Integral",
        component: '@/views/member/integral/index',
        meta: {
          title: "积分管理",
          icon: "coins-line"
        }
      }
    ]
  },
  {
    path: "rider",
    name: "Rider",
    component: 'Layout',
    meta: {
      title: "平台骑手",
      icon: "e-bike-2-line"
    },
    children: [
      {
        path: "list",
        name: "Rider-List",
        component: '@/views/rider/list/index',
        meta: {
          title: "骑手列表",
          icon: "list-unordered"
        }
      },
      {
        path: "review",
        name: "Rider-Review",
        component: '@/views/rider/review/index',
        meta: {
          title: "审核记录",
          icon: "checkbox-line"
        }
      },
      {
        path: "settlement",
        name: "Rider-Settlement",
        component: '@/views/rider/settlement/index',
        meta: {
          title: "结算记录",
          icon: "currency-line"
        }
      },
    ]
  },
  {
    path: "order",
    name: "order",
    component: 'Layout',
    meta: {
      title: "订单管理",
      icon: "bill-line"
    },
    children: [
      {
        path: "list",
        name: "Order-List",
        component: '@/views/order/list/index',
        meta: {
          title: "订单列表",
          icon: "list-unordered"
        }
      },
      {
        path: "afterSale",
        name: "Order-AfterSale",
        component: '@/views/order/afterSale/index',
        meta: {
          title: "售后订单",
          icon: "file-copy-2-line"
        }
      },
      {
        path: "paymentLog",
        name: "Order-PaymentLog",
        component: '@/views/order/paymentLog/index',
        meta: {
          title: "收款流水",
          icon: "money-cny-box-line"
        }
      },
      {
        path: "refundLog",
        name: "order-RefundLog",
        component: '@/views/order/refundLog/index',
        meta: {
          title: "退款流水",
          icon: "refund-2-line"
        }
      },
    ]
  },
  {
    path: "operate",
    name: "Operate",
    component: 'Layout',
    meta: {
      title: "运营中心",
      icon: "dvd-line"
    },
    children: [
      {
        path: "base",
        name: "Operate-Base",
        component: '@/views/operate/base/index',
        meta: {
          title: "基础设置",
          icon: "settings-6-line"
        }
      },
      {
        path: "message",
        name: "Operate-Message",
        component: '@/views/operate/message/index',
        meta: {
          title: "站内信",
          icon: "mail-send-line"
        }
      },
    ]
  },
  {
    path: "system",
    name: "System",
    component: 'Layout',
    meta: {
      title: "系统管理",
      icon: "list-settings-line"
    },
    children: [
      {
        path: "user",
        name: "System-User",
        component: '@/views/system/user/index',
        meta: {
          title: "用户管理",
          icon: "user-line"
        }
      },
      {
        path: "role",
        name: "System-Role",
        component: '@/views/system/role/index',
        meta: {
          title: "角色管理",
          icon: "admin-line"
        }
      },
      {
        path: "menu",
        name: "System-Menu",
        component: '@/views/system/menu/index',
        meta: {
          title: "菜单管理",
          icon: "node-tree"
        }
      },
      {
        path: "dict",
        name: "System-Dict",
        component: '@/views/system/dict/index',
        meta: {
          title: "字典管理",
          icon: "book-2-line"
        }
      },
      {
        path: "oss",
        name: "System-Oss",
        component: '@/views/system/oss/index',
        meta: {
          title: "OSS资源",
          icon: "file-cloud-line"
        }
      },
      {
        path: "paySetting",
        name: "System-PaySetting",
        component: '@/views/system/paySetting/index',
        meta: {
          title: "支付管理",
          icon: "secure-payment-line"
        }
      },
      {
        path: "wxMessageSetting",
        name: "System-WxMessageSetting",
        component: '@/views/system/wxMessageSetting/index',
        meta: {
          title: "微信信息",
          icon: "wechat-line"
        }
      },
    ]
  },
  {
    path: "monitor",
    name: "Monitor",
    component: 'Layout',
    meta: {
      title: "系统监控",
      icon: "computer-line"
    },
    children: [
      {
        path: "log",
        name: "Monitor-Log",
        component: '@/views/monitor/log/index',
        meta: {
          title: "日志管理",
          icon: "building-line"
        }
      },
      {
        path: "performance",
        name: "Monitor-Performance",
        component: '@/views/monitor/performance/index',
        meta: {
          title: "性能监控",
          icon: "dashboard-3-line"
        }
      },
    ]
  }
]

module.exports = [
  {
    url: '/router/getList',
    type: 'get',
    response() {
      return {
        code: 200,
        msg: 'success',
        data: { list },
      }
    },
  },
]
