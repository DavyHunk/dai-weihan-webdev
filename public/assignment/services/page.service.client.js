<<<<<<< HEAD
(function(){
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);


    function PageService($http) {
<<<<<<< HEAD
=======

        var api = {
            createPage: createPage,
            findAllPagesForWebsite: findAllPagesForWebsite,
            findPageById: findPageById,
            updatePage: updatePage,
            deletePage: deletePage
        };
        return api;

        function createPage(websiteId, page) {
            var url = "/api/website/"+websiteId+"/page";
            return $http.post(url, page);
        }



        function findAllPagesForWebsite(websiteId) {
            var url = "/api/website/"+websiteId+"/page";
            return $http.get(url);
        }


        function findPageById(pageId) {
            var url = "/api/page/"+pageId;
            return $http.get(url);
        }


        function updatePage(pageId, page) {
            var url = "/api/page/"+pageId;
            return $http.put(url, page);
        }


        function deletePage(pageId) {
            var url = "/api/page/"+pageId;
            return $http.delete(url);
        }
    }
=======
(function(){
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);


    function PageService() {
        var pages = [
            { "_id": "321", "name": "Post 1", "websiteId": "456" },
            { "_id": "432", "name": "Post 2", "websiteId": "456" },
            { "_id": "543", "name": "Post 3", "websiteId": "456" }
        ];
>>>>>>> origin/master

        var api = {
            createPage: createPage,
            findAllPagesForWebsite: findAllPagesForWebsite,
            findPageById: findPageById,
            updatePage: updatePage,
            deletePage: deletePage
        };
        return api;

        function createPage(websiteId, page) {
<<<<<<< HEAD
            var url = "/api/website/"+websiteId+"/page";
            return $http.post(url, page);
=======
            var newPage = {
                _id: (new Date()).getTime() + "",
                name: page.name,
                websiteId: websiteId,
                description: page.description
            };
            pages.push(newPage);
            return newPage;
>>>>>>> origin/master
        }



<<<<<<< HEAD
        function findAllPagesForWebsite(websiteId) {
            var url = "/api/website/"+websiteId+"/page";
            return $http.get(url);
=======
        function findPageByWebsiteId(websiteId) {
            var result = [];
            for(var i in pages) {
                if(pages[i].websiteId === websiteId) {
                    result.push(pages[i]);
                }
            }
            return result;
>>>>>>> origin/master
        }


        function findPageById(pageId) {
            var url = "/api/page/"+pageId;
            return $http.get(url);
        }


        function updatePage(pageId, page) {
<<<<<<< HEAD
            var url = "/api/page/"+pageId;
            return $http.put(url, page);
=======
            for(var i in pages) {
                if(pages[i]._id === pageId) {
                    pages[i] = page;
                    return true;
                }
            }
            return false;
>>>>>>> origin/master
        }


        function deletePage(pageId) {
            var url = "/api/page/"+pageId;
            return $http.delete(url);
        }
    }
>>>>>>> origin/master
})();