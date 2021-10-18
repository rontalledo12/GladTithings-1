import config from 'src/config';
const url = config.IS_DEV;
let apiUrl = url + '/';
export default {
  auth: apiUrl + 'authenticate',
  authUser: apiUrl + 'authenticate/user',
  authRefresh: apiUrl + 'authenticate/refresh',
  authInvalidate: apiUrl + 'authenticate/invalidate',
  socialAuth: apiUrl + 'social/social-user',
  accountRetrieve: apiUrl + 'accounts/retrieve',
  accountUpdate: apiUrl + 'accounts/update',
  accountCreate: apiUrl + 'accounts/create',
  notificationsRetrieve: apiUrl + 'notifications/retrieve_synqt_notifications',
  notificationUpdate: apiUrl + 'notifications/update',
  notificationCreate: apiUrl + 'notifications/create',
  notificationDelete: apiUrl + 'notifications/delete',
  accountProfileCreate: apiUrl + 'account_profiles/create',
  accountProfileUpdate: apiUrl + 'account_profiles/update',
  accountProfileRetrieve: apiUrl + 'account_profiles/retrieve',
  accountInformationRetrieve: apiUrl + 'account_informations/retrieve',
  accountInformationUpdate: apiUrl + 'account_informations/update',
  emailAlert: apiUrl + 'emails/alert',
  locationCreate: apiUrl + 'locations/create',
  locationRetrieve: apiUrl + 'locations/retrieve',
  locationDelete: apiUrl + 'locations/delete',
  addAddress: apiUrl + 'locations/create',
  imageUpload: apiUrl + 'images/upload',
  imageRetrieve: apiUrl + 'images/retrieve',
  notificationSettingsRetrieve: apiUrl + 'notification_settings/retrieve',
  filters: apiUrl + 'dashboard/categories',
  ratingsCreate: apiUrl + 'ratings/create',
  ratingsUpdate: apiUrl + 'ratings/update',
  ratingsRetrieve: apiUrl + 'ratings/retrieve',
  ratingsMerchantRetrieve: apiUrl + 'merchants/retrieve_with_rating',
  commentsRetrieve: apiUrl + 'comments/retrieve_comments',
  commentsCreate: apiUrl + 'comments/create',
  commentsDelete: apiUrl + 'comments/delete',
  commentMembersCreate: apiUrl + 'comment_members/create',
  commentRepliesCreate: apiUrl + 'comment_replies/create',
  merchantsRetrieve: apiUrl + 'account_merchants/retrieve_with_featured_photos',
  merchantOneRetrieve: apiUrl + 'merchants/retrieve',
  ledgerDirectTransfer: apiUrl + 'ledger/direct_transfer',
  notificationSettingsRetrieve: apiUrl + 'notification_settings/retrieve',
  notificationSettingOtp: apiUrl + 'notification_settings/update_otp',
  ledgerDashboard: apiUrl + 'ledger/dashboard',
  ledgerTransfer: apiUrl + 'ledger/transfer',
  transactionHistoryRetrieve: apiUrl + 'ledger/transaction_history',
  ledgerCreate: apiUrl + 'ledger/create',
  createPaymentIntent: apiUrl + 'stripe_webhooks/create_payment_intent'
};
