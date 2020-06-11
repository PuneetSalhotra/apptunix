

exports.ERROR = {
  eng : {
    ALREADY_REGISTER : {
      statusCode    : 400,
      customMessage : 'Email already registered with us',
      type          : "ALREADY_REGISTER"
    },
    WRONG_LABEL_ID : {
      statusCode    : 400,
      customMessage : 'Wrong Label ID Passed',
      type          : "WRONG_LABEL_ID"
    },
    CHANNEL_ALREADY_CLOSED : {
      statusCode    : 400,
      customMessage : 'This channel is already closed',
      type          : "CHANNEL_ALREADY_CLOSED"
    },
    CHANNEL_ALREADY_OPEN : {
      statusCode    : 400,
      customMessage : 'This channel is already open',
      type          : "CHANNEL_ALREADY_OPEN"
    },
    TAG_ALREADY_ASSIGNED : {
      statusCode    : 400,
      customMessage : 'This tag is already assigned',
      type          : "TAG_ALREADY_ASSIGNED"
    },
    AGENT_ID_DOES_NOT_EXIST : {
      statusCode    : 400,
      customMessage : 'This agent email does not exist',
      type          : "AGENT_ID_DOES_NOT_EXIST"
    },
    TAG_ALREADY_EXISTS : {
      statusCode    : 400,
      customMessage : 'This tag already exists',
      type          : "TAG_ALREADY_EXISTS"
    },
    ALREADY_REQUESTED : {
      statusCode    : 400,
      customMessage : 'Already made a request',
      type          : "ALREADY_REQUESTED"
    },
    ALREADY_REQUESTED_USER : {
      statusCode    : 400,
      customMessage : 'Your request is in progress, we will get back to you soon',
      type          : "ALREADY_REQUESTED_USER"
    },
    NO_CHANGES : {
      statusCode    : 401,
      customMessage : 'No changes made while editing',
      type          : "NO_CHANGES"
    },
    CHANNEL_ALREADY_EXISTS : {
      statusCode    : 400,
      customMessage : 'This channel already exists.',
      type          : "CHANNEL_ALREADY_EXISTS"
    },
    AGENT_ALREADY_EXISTS : {
      statusCode    : 400,
      customMessage : 'This agent email already exists.',
      type          : "AGENT_ALREADY_EXISTS"
    },
    AGENT_ALREADY_ASSIGNED : {
      statusCode    : 401,
      customMessage : 'This agent is already assigned to this channel.',
      type          : "AGENT_ALREADY_ASSIGNED"
    },
    CUSTOMER_ALREADY_REGISTER : {
      statusCode    : 401,
      customMessage : 'Customer phone number already registered with us.',
      type          : "CUSTOMER_ALREADY_REGISTER"
    },
    INCORRECT_PASSWORD : {
      statusCode    : 401,
      customMessage : 'Incorrect password',
      type          : 'INCORRECT_PASSWORD'
    },
    ACCOUNT_BLOCKED : {
      statusCode    : 401,
      customMessage : 'Your account has been deactivated by the Admin.',
      type          : 'ACCOUNT_BLOCKED'
    },
    ACCOUNT_BLOCKED_LOGOUT : {
      statusCode    : 403,
      customMessage : 'Your account has been deactivated by the Admin.',
      type          : 'ACCOUNT_BLOCKED'
    },
    ACCOUNT_NOT_REGISTERED : {
      statusCode    : 401,
      customMessage : 'Your account not registered with any business yet',
      type          : 'ACCOUNT_NOT_REGISTERED'
    },
    INCORRECT_DELIVERY_MODE : {
      statusCode    : 401,
      customMessage : 'Incorrect delivery mode selected',
      type          : 'INCORRECT_DELIVERY_MODE'
    },
    INVALID_TOKEN : {
      statusCode    : 403,
      customMessage : 'Your session has expired. Please login again.',
      type          : 'INVALID_TOKEN'
    },
    INVALID_TOKEN_ACCESS_DENIED : {
      statusCode    : 403,
      customMessage : 'Session Expired, Please Login Again',
      type          : 'INVALID_TOKEN'
    },
    ACCESS_DENIED : {
      statusCode    : 405,
      customMessage : 'Access Denied',
      type          : 'ACCESS_DENIED'
    },
    INVALID_OTP_TOKEN : {
      statusCode    : 400,
      customMessage : 'Invalid OTP token',
      type          : "INVALID_OTP_TOKEN"
    },
    TRIAL_EXPIRED_OWNER : {
      statusCode    : 402,
      customMessage : 'Your free trial has expired, Please navigate to your dashboard',
      type          : 'TRIAL_EXPIRED_OWNER'
    },
    TRIAL_EXPIRED : {
      statusCode    : 402,
      customMessage : 'Your free trial has expired, Please contact your business admin',
      type          : 'TRIAL_EXPIRED'
    },
    POS_NOT_ENABLED : {
      statusCode    : 401,
      customMessage : 'Currently you do not owe services of this facility. Please contact our customer care for enabling this feature',
      type          : 'POS_NOT_ENABLED'
    },
    NO_RECORD : {
      statusCode    : 404,
      customMessage : 'No record found.',
      type          : 'NO_RECORD'
    },
    USER_BLOCKED : {
      statusCode    : 401,
      customMessage : 'Your account has been blocked by the Admin user',
      type          : 'USER_BLOCKED'
    },
    ALREADY_EXIST : {
      statusCode    : 400,
      customMessage : 'Email/Phone number already exists.',
      type          : 'ALREADY_EXIST'
    },
    CATEGORY_ALREADY_EXIST : {
      statusCode    : 401,
      customMessage : 'This Category already exists.',
      type          : 'CATEGORY_ALREADY_EXIST'
    },
    USER_ALREADY_REGISTERED : {
      statusCode    : 401,
      customMessage : 'Email already exists.',
      type          : 'USER_ALREADY_REGISTERED'
    },
    UNAUTHORIZED : {
      statusCode    : 401,
      customMessage : 'You are not authorized to perform this action',
      type          : 'UNAUTHORIZED'
    },
    DELIVERY_MODE_NOT_SELECTED : {
      statusCode    : 401,
      customMessage : 'Please select a Delivery Mode for Delivery type order',
      type          : 'DELIVERY_MODE_NOT_SELECTED'
    },
    INVALID_EMAIL : {
      statusCode    : 401,
      customMessage : 'This email address is not associated with any account.',
      type          : 'INVALID_EMAIL'
    },
    INVALID_CREDENTIALS : {
      statusCode    : 401,
      customMessage : 'Oops! The Email or Password is incorrect.',
      type          : 'INVALID_CREDENTIALS'
    },
    INVALID_PASSWORD : {
      statusCode    : 401,
      customMessage : 'Wrong Password. Try again or click Forgot Password to reset it.',
      type          : 'INVALID_PASSWORD'
    },
    NOT_REGISTERED : {
      statusCode    : 401,
      customMessage : 'Email is not registered with us !!',
      type          : 'INVALID_CREDENTIALS'
    },
    INVALID_ACCESS_TOKEN : {
      statusCode    : 403,
      customMessage : 'Oops! Your session has expired.',
      type          : 'INVALID_ACCESS_TOKEN'
    },
    INVALID_SUPER_ADMIN_TOKEN : {
      statusCode    : 401,
      customMessage : ' Invalid Parameters / Super Admin Token ',
      type          : 'INVALID_SUPER_ADMIN_TOKEN'
    },
    INVALID_PARAMETERS : {
      statusCode    : 401,
      customMessage : ' Invalid Parameters / Bad Request ',
      type          : 'INVALID_PARAMETERS'
    },
    DEFAULT : {
      statusCode    : 400,
      customMessage : 'Something went wrong.',
      type          : 'DEFAULT'
    },
    INVALID_RESELLER_TOKEN : {
      status        : 401,
      customMessage : 'Reseller Token Invalid',
      type          : 'INVALID_TOKEN'
    },
    INVALID_BUSINESS_ID : {
      status        : 401,
      customMessage : 'Invalid Business Id',
      type          : 'INVALID_BUSINESS_ID'
    },
    RESELLER_DISABLED : {
      statusCode    : 401,
      customMessage : 'Reseller disabled',
      type          : 'RESELLER_DISABLED'
    },
    RESELLER_BUSINESS_INFO : {
      statusCode    : 400,
      customMessage : 'Error while fetching Reseller Business info',
      type          : 'RESELLER_INFO'
    },
    RESELLER_BUSINESS_UPDATE_FAILURE : {
      statusCode    : 400,
      customMessage : 'Error while updating Business info from Reseller',
      type          : 'RESELLER_BUSINESS_UPDATE_FAILURE'
    },
    RESELLER_CREATE_BUSINESS : {
      statusCode    : 400,
      customMessage : 'Error while creating a reseller business',
      type          : 'RESELLER_BUSINESS_CREATE'
    },
    RESELLER_UPDATE_FAILURE : {
      statusCode    : 400,
      customMessage : 'Error while updating a reseller info',
      type          : 'RESELLER_BUSINESS_CREATE'
    },
    RESELLER_CREATE_FAILURE : {
      statusCode    : 400,
      customMessage : 'Error while creating a reseller',
      type          : 'RESELLER_CREATE_FAILURE'
    },
    RESELLER_PRESENT : {
      statusCode    : 400,
      customMessage : 'Reseller already present',
      type          : 'RESELLER_PRESENT'
    },
    INVALID_COMPONENT_KEY : {
      statusCode    : 401,
      customMessage : 'Invalid component key',
      type          : 'INVALID_COMPONENT_KEY'
    },
    USER_NOT_FOUND : {
      statusCode    : 400,
      customMessage : 'User does not exist',
      type          : 'USER_NOT_FOUND'
    },
    USER_REQUIRED : {
      statusCode    : 400,
      customMessage : 'User Required',
      type          : 'USER_REQUIRED'
    },
    PARAMETER_REQUIRED : {
      statusCode    : 400,
      customMessage : 'Parameters Required',
      type          : 'PARAMETER_REQUIRED'
    },
    ALERT_NOT_FOUND : {
      statusCode    : 404,
      customMessage : 'Alert Not Found',
      type          : 'ALERT_NOT_FOUND'
    },
    ALERT_ALREADY_CLOSED : {
      statusCode    : 400,
      customMessage : 'Alert Already Closed',
      type          : 'ALERT_ALREADY_CLOSED'
    },
    DATA_UNAVAILABLE : {
      statusCode    : 406,
      customMessage : 'DATA UNAVAILABLE',
      type          : 1
    },

    BULBUL_NOT_INTEGRATED : {
      statusCode    : 207,
      customMessage : 'Please set up your bulbul profile first!',
      type          : 'BULBUL_INTEGRATE_ERROR'
    },
    INVALID_DATA : {
      statusCode    : 409,
      customMessage : 'User does not belong to this channel!',
      type          : "INVALID_DATA"
    },
    UNAUTHENTICATED_MESSAGE : {
      statusCode    : 413,
      customMessage : 'This chat has already been assigned to another agent',
      type          : "UNAUTHENTICATED_MESSAGE",
      showError     : true
    },
    UNAUTHENTICATED_O2O_MESSAGE : {
      statusCode    : 413,
      customMessage : 'You are not allowed to perform this action',
      type          : "UNAUTHENTICATED_O2O_MESSAGE",
      showError     : true
    },
    INVALID_DOMAIN : {
      statusCode    : 405,
      customMessage : 'Invalid Domain',
      type          : 'ACCESS_DENIED'
    }
  }
};

exports.SUCCESS = {
  CONVERSATION_MARKED_SUCCESSFULLY : {
    statusCode    : 200,
    customMessage : 'Conversation Marked Successfully',
    type          : 'CONVERSATION_MARKED_SUCCESSFULLY'
  },
  DATA_FETCHED_SUCCESSFULLY : {
    statusCode    : 200,
    customMessage : 'Data Fetched Successfully',
    type          : 'DATA_FETCHED_SUCCESSFULLY'
  },
};

exports.swaggerDefaultResponseMessages = [
  { code : 200, message : 'OK' },
  { code : 201, message : 'CREATED' },
  { code : 400, message : 'Bad Request' },
  { code : 401, message : 'Unauthorized' },
  { code : 403, message : 'Forbidden' },
  { code : 404, message : 'Data Not Found' },
  { code : 500, message : 'Something went wrong, try again' }
];
