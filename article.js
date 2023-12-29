
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

            for (let i = 0; i < 4; i++) {
                const element = document.querySelector("#newWrap" + (i + 1));
                const createElement = '<img class="newImage" src="' + articleList[i].mainImage + '" alt="mainImage"><span class="newTitle">' + articleList[i].title + '</span>';
                element.innerHTML = createElement;
            }
        });
    })
    .catch(err => console.error(err));
