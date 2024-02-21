const fullName = function (city, country) {
    console.log(this.firstName + ' ' + this.lastName);
}

// 원래는 위의 함수에서 this는 window 객체를 가리킨다. 이 때 undefined, undefined 출력

const person1 = {
    firstName: 'John',
    lastName: 'Smith'
}

fullName.call(person1, "city", "country")


// Apply

fullName.apply(person1, ["city", "country"])


// Bind

function func(language) {
    if (language === "kor") {
        console.log(`language: ${this.korGreeting}`);
    }
    else {
        console.log(`language: ${this.engGreeting}`);
    }
}

const greeting = {
    korGreeting: '안녕',
    engGreeting: 'Hello'
}

const boundfunc = func.bind(greeting);
boundfunc('kor')
boundfunc('eng')