const audio = {
    title: 'audio',
    categories: ['rock', 'pop', 'hiphop'],
    displayCategories() {
        this.categories.forEach(function (category) {
            console.log(`title: ${this.title}, category: ${category}`);
        }, this)
    }
}

// 함수 안에서의 this는 윈도우 객체를 가리킨다.

// 화살표 함수에서의 this는 항상 상위 스코프의 this를 가리킨다