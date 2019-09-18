import axios from "axios";

const domain = "http://127.0.0.1:8080";

export async function getdata(type, url, data) {
    return await axios({ "method": type, "url": domain + url, "params": data});
 }