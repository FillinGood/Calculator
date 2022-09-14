(() => {
  function onLoad() {
    const n9 = document.getElementById("n9");
    const n8 = document.getElementById("n8");
    const n7 = document.getElementById("n7");
    const n6 = document.getElementById("n6");
    const n5 = document.getElementById("n5");
    const n4 = document.getElementById("n4");
    const n3 = document.getElementById("n3");
    const n2 = document.getElementById("n2");
    const n1 = document.getElementById("n1");
    const n0 = document.getElementById("n0");
    const opdiv = document.getElementById("opdiv");
    const opmul = document.getElementById("opmul");
    const opsub = document.getElementById("opsub");
    const opadd = document.getElementById("opadd");
    const opeq = document.getElementById("opeq");
    const opclear = document.getElementById("opclear");
    const display = document.getElementById("display");

    let a = 0;
    let b = 0;
    let op;

    function input(n) {
      if (!op) {
        if (String(a).length >= 9) return;
        a = +(a + String(n));
        display.innerText = a;
      } else {
        if (String(b).length >= 9) return;
        b = +(b + String(n));
        display.innerText = b;
      }
    }

    function calc() {
      switch (op) {
        case "/":
          return a / b;
        case "*":
          return a * b;
        case "-":
          return a - b;
        case "+":
          return a + b;
      }
    }

    opdiv.addEventListener("click", () => (op = "/"));
    opmul.addEventListener("click", () => (op = "*"));
    opsub.addEventListener("click", () => (op = "-"));
    opadd.addEventListener("click", () => (op = "+"));
    opeq.addEventListener("click", () => {
      if (!op) return;
      a = calc();
      display.innerText = a;
      b = 0;
      op = null;
    });
    opclear.addEventListener("click", () => {
      a = 0;
      display.innerHTML = "&nbsp;";
      b = 0;
      op = null;
    });

    n9.addEventListener("click", () => input(9));
    n8.addEventListener("click", () => input(8));
    n7.addEventListener("click", () => input(7));
    n6.addEventListener("click", () => input(6));
    n5.addEventListener("click", () => input(5));
    n4.addEventListener("click", () => input(4));
    n3.addEventListener("click", () => input(3));
    n2.addEventListener("click", () => input(2));
    n1.addEventListener("click", () => input(1));
    n0.addEventListener("click", () => input(0));
  }

  document.onreadystatechange = () => {
    if (document.readyState === "complete") {
      onLoad();
    }
  };
})();
