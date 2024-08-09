import { PATH_DASHBOARD, PATH_PUBLIC}  from "../routes/paths"

//URLS
export const HOST_API_KEY = "https://localhost:7243/api";
export const REGISTER_URL = "/Auth/register";
export const LOGIN_URL = "Auth/login";
export const ME_URL = "/Auth/me";
export const USERS_LIST_URL = "/Auth/users";
export const UPDATE_ROLE_URL = "/Auth/update-role";
export const DELETE_ROLE_URL = "/Auth/users/";
export const USERNAMES_LIST_URL = "/Auth/users/{username}";
export const LOGS_URL = "/Logs";
export const MY_LOGS_URL = "/Logs/mine";
export const BLOCK_URL = "/Auth/blocked/";
export const UPDATE_PAGE_DATA = "/Auth/user?userName="

// Auth Routes
export const PATH_AFTER_REGISTER = PATH_PUBLIC.login;
export const PATH_AFTER_LOGIN = PATH_DASHBOARD.dashboard;
export const PATH_AFTER_LOGOUT = PATH_PUBLIC.login;
