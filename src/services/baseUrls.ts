const BASE_URL = import.meta.env.VITE_BASE_URL;

export const userEndpoints = {
    SEND_OTP_API: BASE_URL + "/user/sendotp",
    SIGNUP_API: BASE_URL + "/user/signup",
    LOGIN_API: BASE_URL + "/user/login"
}

export const blogEndpoints = {
    CREATE_BLOG_API: BASE_URL + "/blog",
    UPDATE_BLOG_API: BASE_URL + "/update-blog",
    FULL_BLOG_API: BASE_URL + "/blog/",
    ALL_BLOG_API: BASE_URL + "/getAllBlogs",
    DELETE_BLOG_API: BASE_URL + "/delete-blog/",
    USER_BLOG_API: BASE_URL + "/userBlogs"
}