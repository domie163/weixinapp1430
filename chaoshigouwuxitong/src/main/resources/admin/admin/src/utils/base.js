const base = {
    get() {
        return {
            url : "http://localhost:8080/chaoshigouwuxitong/",
            name: "chaoshigouwuxitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/chaoshigouwuxitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "超市购物系统"
        } 
    }
}
export default base
