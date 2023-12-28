fetch('https://raw.githubusercontent.com/shiki-01/misc/main/json/articleList.json')
    .then(result => result.json())
    .then((output) => {
        console.log('Output: ', output);

        var list = output.list;

        console.log(list);
        list = list.sort(function(a,b){
            return (a[1] < b[1] ? 1 : -1);
          });

              console.log(list);

        list.forEach(function (value) {
            fetch('https://raw.githubusercontent.com/shiki-01/misc/main/json/' + value + '.json')
                .then(result => result.json())
                .then((output) => {
                    console.log('Output: ', output);

                });
        })
            .catch(err => console.error(err));
    })
    .catch (err => console.error(err));