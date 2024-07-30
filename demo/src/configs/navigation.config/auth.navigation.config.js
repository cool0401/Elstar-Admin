import { AUTH_PREFIX_PATH } from 'constants/route.constant'
import { NAV_ITEM_TYPE_TITLE, NAV_ITEM_TYPE_COLLAPSE, NAV_ITEM_TYPE_ITEM } from 'constants/navigation.constant'
import { ADMIN, USER } from 'constants/roles.constant'

const authNavigationConfig = [
	{
		key: 'authentication',
		path: '',
		title: 'AUTHENTICATION',
		translateKey: 'nav.authentication.authentication',
		icon: 'authentication',
		type: NAV_ITEM_TYPE_TITLE,
		authority: [ADMIN, USER],
		subMenu: [
			{
				key: 'authentication.signIn',
				path: '',
				title: 'Sign In',
				translateKey: 'nav.authentication.signIn',
				icon: 'signIn',
				type: NAV_ITEM_TYPE_COLLAPSE,
				authority: [ADMIN, USER],
				subMenu: [
					{
						key: 'authentication.signInSimple',
						path: `${AUTH_PREFIX_PATH}/sign-in-simple`,
						title: 'Simple',
						translateKey: 'nav.authentication.signInSimple',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'authentication.signInSide',
						path: `${AUTH_PREFIX_PATH}/sign-in-side`,
						title: 'Side',
						translateKey: 'nav.authentication.signInSide',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'authentication.signInCover',
						path: `${AUTH_PREFIX_PATH}/sign-in-cover`,
						title: 'Cover',
						translateKey: 'nav.authentication.signInCover',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					}
				]
			},
			{
				key: 'authentication.signUp',
				path: '',
				title: 'Sign Up',
				translateKey: 'nav.authentication.signUp',
				icon: 'signUp',
				type: NAV_ITEM_TYPE_COLLAPSE,
				authority: [ADMIN, USER],
				subMenu: [
					{
						key: 'authentication.signUpSimple',
						path: `${AUTH_PREFIX_PATH}/sign-up-simple`,
						title: 'Simple',
						translateKey: 'nav.authentication.signUpSimple',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'authentication.signUpSide',
						path: `${AUTH_PREFIX_PATH}/sign-up-side`,
						title: 'Side',
						translateKey: 'nav.authentication.signUpSide',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'authentication.signUpCover',
						path: `${AUTH_PREFIX_PATH}/sign-up-cover`,
						title: 'Cover',
						translateKey: 'nav.authentication.signUpCover',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					}
				]
			},
			{
				key: 'authentication.forgotPassword',
				path: '',
				title: 'Forgot Password',
				translateKey: 'nav.authentication.forgotPassword',
				icon: 'forgotPassword',
				type: NAV_ITEM_TYPE_COLLAPSE,
				authority: [ADMIN, USER],
				subMenu: [
					{
						key: 'authentication.forgotPasswordSimple',
						path: `${AUTH_PREFIX_PATH}/forgot-password-simple`,
						title: 'Simple',
						translateKey: 'nav.authentication.forgotPasswordSimple',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'authentication.forgotPasswordSide',
						path: `${AUTH_PREFIX_PATH}/forgot-password-side`,
						title: 'Side',
						translateKey: 'nav.authentication.forgotPasswordSide',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'authentication.forgotPasswordCover',
						path: `${AUTH_PREFIX_PATH}/forgot-password-cover`,
						title: 'Cover',
						translateKey: 'nav.authentication.forgotPasswordCover',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					}
				]
			},
			{
				key: 'authentication.resetPassword',
				path: '',
				title: 'Reset Password',
				translateKey: 'nav.authentication.resetPassword',
				icon: 'resetPassword',
				type: NAV_ITEM_TYPE_COLLAPSE,
				authority: [ADMIN, USER],
				subMenu: [
					{
						key: 'authentication.resetPasswordSimple',
						path: `${AUTH_PREFIX_PATH}/reset-password-simple`,
						title: 'Simple',
						translateKey: 'nav.authentication.resetPasswordSimple',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'authentication.resetPasswordSide',
						path: `${AUTH_PREFIX_PATH}/reset-password-side`,
						title: 'Side',
						translateKey: 'nav.authentication.resetPasswordSide',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					},
					{
						key: 'authentication.resetPasswordCover',
						path: `${AUTH_PREFIX_PATH}/reset-password-cover`,
						title: 'Cover',
						translateKey: 'nav.authentication.resetPasswordCover',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						authority: [ADMIN, USER],
						subMenu: []
					}
				]
			},
		]
	}
]

export default authNavigationConfig