fetch('https://raw.githubusercontent.com/shiki-01/misc/main/json/articleList.json')
    .then(result => result.json())
    .then((output) => {

        var list = output.list;

        list = list.sort((a, b) => {
            const aMilliseconds = new Date(a).getTime();
            const bMilliseconds = new Date(b).getTime();
            return aMilliseconds - bMilliseconds;
        });

        var articleList = [];

        async function fetchData() {

            for (let i = 0; i < list.length; i++) {
                try {
                    var response = await fetch('https://raw.githubusercontent.com/shiki-01/misc/main/json/' + list[i] + '.json');
                    var data = await response.json();
                    articleList.push(data);
                } catch (error) {
                    console.error(error);
                }
            }

        }

        fetchData().then(function () {

            console.log(articleList);

            let num = 0;

            for (let i = 0, j = 0; i + 1 < list.length; i + 0, j++) {
                const element = document.querySelector(".allWrapping");
                //const createElement = '<span class="imageWrap"><img class="newImage" src="' + articleList[num].mainImage + '" alt="' + list[num] + '"></span><span class="newTitle">' + articleList[num].title + '</span><span class="newTags"></span><span class="newBody">' + articleList[num].content.substring(0, 80) + '…</span>';
                //element.innerHTML = createElement;

                let createElement = "";

                if (i + 3 < list.length){
                    for (let ii = 0; ii < 3; ii++) {
                        createElement += '<div class="allWrap ' + list[num] + ' allWrap' + (ii + 1) + '" id="allWrap' + (i + 1) + '"><span class="imageWrap"><img class="allImage" src="' + articleList[num].mainImage + '" alt="' + list[num] + '"></span><span class="allDate"></span><span class="allTitle">' + articleList[num].title + '</span></div>';
                        i += 1;
                        num += 1;
                    }
                } else {
                    for (let ii = 0; i < list.length; ii++) {
                        createElement += '<div class="allWrap ' + list[num] + ' allWrap' + (ii + 1) + '" id="allWrap' + (i + 1) + '"><span class="imageWrap"><img class="allImage" src="' + articleList[num - 1].mainImage + '" alt="' + list[num] + '"></span><span class="allDate"></span><span class="allTitle">' + articleList[num - 1].title + '</span></div>';
                        i += 1;
                        num += 1;
                    }
                }

                console.log(j);
                j=2;
                element.style.gridTemplateRows = 'repeat(${j+1}, 240px)' ;

                element.insertAdjacentHTML('beforeend', createElement);
            }

            num = list.length - 1;

            for (let i = 0; i < 4; i++) {
                const element = document.querySelector("#newWrap" + (i + 1));
                const createElement = '<span class="imageWrap"><img class="newImage" src="' + articleList[num].mainImage + '" alt="' + list[num] + '"></span><span class="newTitle">' + articleList[num].title + '</span><span class="newTags"></span><span class="newBody">' + articleList[num].content.substring(0, 80) + '…</span>';
                element.innerHTML = createElement;

                for (let ii = 0; ii < articleList[num].tag.length; ii++) {
                    const elementTag = document.querySelector("#newWrap" + (i + 1) + " > .newTags");
                    const createElementTag = '<span class="tag">#' + articleList[num].tag[ii] + '</span>';
                    elementTag.insertAdjacentHTML("beforeend", createElementTag);
                }

                element.setAttribute("class", "newWrap" + " " + list[num]);

                document.querySelector("#newWrap" + (i + 1) + "> .imageWrap").addEventListener('click', function () {
                    alt = document.querySelector("#newWrap" + (i + 1) + "> .imageWrap > img").getAttribute('alt');
                    sessionStorage.setItem("value", alt);
                    window.location.href = "./article.html";
                });
                document.querySelector("#newWrap" + (i + 1) + "> .newTitle").addEventListener('click', function () {
                    alt = document.querySelector("#newWrap" + (i + 1) + "> .imageWrap > img").getAttribute('alt');
                    sessionStorage.setItem("value", alt);
                    window.location.href = "./article.html";
                });
                document.querySelector("#newWrap" + (i + 1) + "> .newBody").addEventListener('click', function () {
                    alt = document.querySelector("#newWrap" + (i + 1) + "> .imageWrap > img").getAttribute('alt');
                    sessionStorage.setItem("value", alt);
                    window.location.href = "./article.html";
                });

                num -= 1;

            };
        });
    })
    .catch(err => console.error(err));