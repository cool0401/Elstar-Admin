import { APP_PREFIX_PATH } from 'constants/route.constant'
import { NAV_ITEM_TYPE_TITLE, NAV_ITEM_TYPE_COLLAPSE, NAV_ITEM_TYPE_ITEM } from 'constants/navigation.constant'
import { ADMIN, USER } from 'constants/roles.constant'

const appsNavigationConfig = [
	{
		key: 'apps',
		path: '',
		title: 'APPS',
		translateKey: 'nav.apps',
		icon: 'apps',
		type: NAV_ITEM_TYPE_TITLE,
		authority: [ADMIN, USER],
		subMenu: [
			{
				key: 'apps.project',
				path: '',
				title: 'Project',
				translateKey: 'nav.appsProject.project',
				icon: 'project',
				type: NAV_ITEM_TYPE_COLLAPSE,
				authority: [ADMIN, USER],
				subMenu: [
					{
						key: 'appsProject.dashboard',
						path: `${APP_PREFIX_PATH}/project/dashboard`,
						title: 'Dashboard',
						translateKey: 'nav.appsProject.dashboard',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsProject.projectList',
						path: `${APP_PREFIX_PATH}/project/project-list`,
						title: 'Project List',
						translateKey: 'nav.appsProject.projectList',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsProject.scrumBoard',
						path: `${APP_PREFIX_PATH}/project/scrum-board`,
						title: 'Scrum Board',
						translateKey: 'nav.appsProject.scrumBoard',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsProject.issue',
						path: `${APP_PREFIX_PATH}/project/issue`,
						title: 'Issue',
						translateKey: 'nav.appsProject.issue',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
				]
			},
			{
				key: 'apps.crm',
				path: '',
				title: 'CRM',
				translateKey: 'nav.appsCrm.crm',
				icon: 'crm',
				type: NAV_ITEM_TYPE_COLLAPSE,
				authority: [ADMIN, USER],
				subMenu: [
					{
						key: 'appsCrm.dashboard',
						path: `${APP_PREFIX_PATH}/crm/dashboard`,
						title: 'Dashboard',
						translateKey: 'nav.appsCrm.dashboard',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsCrm.calendar',
						path: `${APP_PREFIX_PATH}/crm/calendar`,
						title: 'Calendar',
						translateKey: 'nav.appsCrm.calendar',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsCrm.customers',
						path: `${APP_PREFIX_PATH}/crm/customers`,
						title: 'Targets',
						translateKey: 'nav.appsCrm.customers',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsCrm.customerDetails',
						path: `${APP_PREFIX_PATH}/crm/customer-details?id=8`,
						title: 'Target Details',
						translateKey: 'nav.appsCrm.customerDetails',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsCrm.mail',
						path: `${APP_PREFIX_PATH}/crm/mail`,
						title: 'Sessions',
						translateKey: 'nav.appsCrm.mail',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
				]
			},
			{
				key: 'apps.sales',
				path: '',
				title: 'Sales',
				translateKey: 'nav.appsSales.sales',
				icon: 'sales',
				type: NAV_ITEM_TYPE_COLLAPSE,
				authority: [ADMIN, USER],
				subMenu: [
					{
						key: 'appsSales.dashboard',
						path: `${APP_PREFIX_PATH}/sales/dashboard`,
						title: 'Dashboard',
						translateKey: 'nav.appsSales.dashboard',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsSales.productList',
						path: `${APP_PREFIX_PATH}/sales/product-list`,
						title: 'Product List',
						translateKey: 'nav.appsSales.productList',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsSales.productEdit',
						path: `${APP_PREFIX_PATH}/sales/product-edit/12`,
						title: 'Product Edit',
						translateKey: 'nav.appsSales.productEdit',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsSales.productNew',
						path: `${APP_PREFIX_PATH}/sales/product-new`,
						title: 'New Product',
						translateKey: 'nav.appsSales.productNew',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsSales.orderList',
						path: `${APP_PREFIX_PATH}/sales/order-list`,
						title: 'Order List',
						translateKey: 'nav.appsSales.orderList',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsSales.orderDetails',
						path: `${APP_PREFIX_PATH}/sales/order-details/95954`,
						title: 'Order Details',
						translateKey: 'nav.appsSales.orderDetails',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
				]
			},
			{
				key: 'apps.crypto',
				path: '',
				title: 'Crypto',
				translateKey: 'nav.appsCrypto.crypto',
				icon: 'crypto',
				type: NAV_ITEM_TYPE_COLLAPSE,
				authority: [ADMIN, USER],
				subMenu: [
					{
						key: 'appsCrypto.dashboard',
						path: `${APP_PREFIX_PATH}/crypto/dashboard`,
						title: 'Dashboard',
						translateKey: 'nav.appsCrypto.dashboard',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsCrypto.portfolio',
						path: `${APP_PREFIX_PATH}/crypto/portfolio`,
						title: 'Portfolio',
						translateKey: 'nav.appsCrypto.portfolio',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsCrypto.market',
						path: `${APP_PREFIX_PATH}/crypto/market`,
						title: 'Market',
						translateKey: 'nav.appsCrypto.market',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsCrypto.wallets',
						path: `${APP_PREFIX_PATH}/crypto/wallets`,
						title: 'Wallets',
						translateKey: 'nav.appsCrypto.wallets',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
				]
			},
			{
				key: 'apps.knowledgeBase',
				path: '',
				title: 'Knowledge Base',
				translateKey: 'nav.appsknowledgeBase.knowledgeBase',
				icon: 'knowledgeBase',
				type: NAV_ITEM_TYPE_COLLAPSE,
				authority: [ADMIN, USER],
				subMenu: [
					{
						key: 'appsknowledgeBase.helpCenter',
						path: `${APP_PREFIX_PATH}/knowledge-base/help-center`,
						title: 'Help Center',
						translateKey: 'nav.appsknowledgeBase.helpCenter',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsknowledgeBase.article',
						path: `${APP_PREFIX_PATH}/knowledge-base/article?id=rZjCbSyae5`,
						title: 'Article',
						translateKey: 'nav.appsknowledgeBase.article',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsknowledgeBase.manageArticles',
						path: `${APP_PREFIX_PATH}/knowledge-base/manage-articles`,
						title: 'Manage Articles',
						translateKey: 'nav.appsknowledgeBase.manageArticles',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsknowledgeBase.editArticle',
						path: `${APP_PREFIX_PATH}/knowledge-base/edit-article?id=rZjCbSyae5&categoryLabel=Survey&categoryValue=survey`,
						title: 'Edit Article',
						translateKey: 'nav.appsknowledgeBase.editArticle',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
				]
			},
			{
				key: 'apps.account',
				path: '',
				title: 'Account',
				translateKey: 'nav.appsAccount.account',
				icon: 'account',
				type: NAV_ITEM_TYPE_COLLAPSE,
				authority: [ADMIN, USER],
				subMenu: [
					{
						key: 'appsAccount.settings',
						path: `${APP_PREFIX_PATH}/account/settings/profile`,
						title: 'Settings',
						translateKey: 'nav.appsAccount.settings',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsAccount.invoice',
						path: `${APP_PREFIX_PATH}/account/invoice/36223`,
						title: 'Invoice',
						translateKey: 'nav.appsAccount.invoice',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsAccount.activityLog',
						path: `${APP_PREFIX_PATH}/account/activity-log`,
						title: 'Activity Log',
						translateKey: 'nav.appsAccount.activityLog',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'appsAccount.kycForm',
						path: `${APP_PREFIX_PATH}/account/kyc-form`,
						title: 'KYC Form',
						translateKey: 'nav.appsAccount.kycForm',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
				]
			},
		]
	}
]

export default appsNavigationConfig