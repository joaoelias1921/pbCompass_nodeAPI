"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function userPaginate() {
    // Get total number of pages
    var cards = document.querySelectorAll(".user-ul");
    let listArray = Array.from(cards);
    // State
    // Number of products
    const numberOfItems = listArray.length;
    const numberPerPage = 3;
    const currentPage = 1;
    // Number of pages
    const numberOfPages = Math.ceil(numberOfItems / numberPerPage);
    function accomodatePage(clickedPage) {
        if (clickedPage <= 1) {
            return clickedPage + 1;
        }
        if (clickedPage >= numberOfPages) {
            return clickedPage - 1;
        }
        return clickedPage;
    }
    function buildPagination(clickedPage) {
        $('.paginator').empty();
        const currPageNum = accomodatePage(clickedPage);
        if (numberOfPages >= 3) {
            for (let i = -1; i < 2; i++) {
                $('.paginator').append(`<button class="btn btn-primary" value="${currPageNum + i}">${currPageNum + i}</button>`);
            }
        }
        else {
            for (let i = 0; i < numberOfPages; i++) {
                $('.paginator').append(`<button class="btn btn-primary" value="${i + 1}">${i + 1}</button>`);
            }
        }
    }
    function buildPage(currPage) {
        const trimStart = (currPage - 1) * numberPerPage;
        const trimEnd = trimStart + numberPerPage;
        console.log(trimStart, trimEnd);
        console.log(listArray.slice(trimStart, trimEnd));
        $('.content').empty().append(listArray.slice(trimStart, trimEnd));
    }
    $(document).ready(function () {
        buildPage(1);
        buildPagination(currentPage);
        $('.paginator').on('click', 'button', function () {
            var clickedPage = parseInt($(this).val());
            buildPagination(clickedPage);
            console.log(`Page clicked on ${clickedPage}`);
            buildPage(clickedPage);
        });
    });
}
exports.default = userPaginate;
