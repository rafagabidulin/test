let money = +prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

// let a1 = prompt('Введите обязательную статью расходов в этом месяце'),
//     a2 = prompt('Во сколько обойдется?'),
//     a3 = prompt('Введите обязательную статью расходов в этом месяце'),
//     a4 = prompt('Во сколько обойдется?');

// .........................................1 способ.......................................................................
for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется?', '');
    
    if ( (typeof(a))==='string' && (typeof(a)) !=null && (typeof(b)) !=null
&& a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        while (false) {
            i = i - 1;
            // a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            // b = prompt('Во сколько обойдется?', '');
        };
    };
};

// .........................................2 способ .....................................................................
    
/*let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
    b = prompt('Во сколько обойдется?', '');
typeof(a)==='string';
typeof(a) !=null;
typeof(b) !=null;
a != '';
b != '';
a.length < 50;
while (false) {
    a = prompt('Введите обязательную статью расходов в этом месяце', ''),
    b = prompt('Во сколько обойдется?', '');
};*/

// ............................................................................................................
appData.moneyPerDay = appData.budjet / 30;

alert ("Ваш бюджет на 1 день: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log ("Произошла ошибка");
}
