class Worker {
  constructor(name, position, moneyPerDay) {
    this.name = name;
    this.position = position;
    this.moneyPerDay = moneyPerDay;
  }
}

calcSalary(day);
{
  return day + this.moneyPerDay;
}
class Boss extends Worker {
  constructor(name, moneyPerDay) {
    super(name, "BOSS", moneyPerDay);
  }
}
calcSalary(day);
{
  return day + this.moneyPerDay * 5;
}
