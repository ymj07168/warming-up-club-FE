let instance;
// 1. 생성자에서 하나의 인스턴스만 생성될 수 있게 로직 작성
class Counter {
  constructor() {
    if (instance) {
      throw new Error("하나의 인스턴스만 생성할 수 있습니다.");
    }
    this.counter = 0;
    instance = this;
  }

  getCount() {
    return this.counter;
  }

  increment() {
    return this.counter++;
  }

  decrement() {
    return this.counter--;
  }
}

// 2. 객체 인스턴스 생성, 두번째 생성한 객체는 에러가 납니다.
const singletonCounterA = new Counter();

// 에러 발생
// const CounterB = new Counter();

singletonCounterA.increment();
singletonCounterA.increment();

console.log(singletonCounterA.getCount());
