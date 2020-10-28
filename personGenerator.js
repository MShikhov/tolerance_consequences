const personGenerator = {
  surnameJson: `{  
        "count": 23,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов",
            "id_17": "Гумилев",
            "id_18": "Понасенков",
            "id_19": "Дугин",
            "id_20": "Соболев",
            "id_21": "Ларин",
            "id_22": "Магамедов",
            "id_23": "Вагин"
        }
    }`,
  firstNameMaleJson: `{
        "count": 20,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей",
            "id_11": "Хабиб",
            "id_12": "Асхаб",
            "id_13": "Авраам",
            "id_14": "Давид",
            "id_15": "Владимир",
            "id_16": "Анвар",
            "id_17": "Батыр",
            "id_18": "Жан",
            "id_19": "Ян",
            "id_20": "Анатолий"
          
        }
    }`,
  firstNameFemaleJson: `{
        "count": 15,
        "list": {     
            "id_1": "Александра",
            "id_2": "Анастасия",
            "id_3": "Екатерина",
            "id_4": "Дарья",
            "id_5": "Ксения",
            "id_6": "Светлана",
            "id_7": "Снежана",
            "id_8": "Наташка",
            "id_9": "Виктория",
            "id_10": "Кончита",
            "id_11": "Жанна",
            "id_12": "Елизавета",
            "id_13": "Варвара",
            "id_14": "Клара",
            "id_15": "Амина"
           
           
            
        }
    }`,

  randomIntNumber: (min = 0, max = 1) =>
    Math.floor(Math.random() * (max - min + 1) + min),

  randomValue: function (json) {
    const obj = JSON.parse(json);
    const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator
    return obj.list[prop];
  },

  randomFirstName: function () {
    if (this.person.gender === "Мужчина") {
      return this.randomValue(this.firstNameMaleJson);
    } else {
      return this.randomValue(this.firstNameFemaleJson);
    }
  },

  randomSurname: function () {
    if (this.person.gender === "Мужчина") {
      return this.randomValue(this.surnameJson);
    } else {
      return this.randomValue(this.surnameJson) + "a";
      // return this.randomValue(this.surnameJson);
    }
  },
  randomGender: function () {
    const gender = ["Мужчина", "Женщина"];
    const genderRand = Math.floor(Math.random() * gender.length);
    return gender[genderRand];
  },
  randomYear: function () {
    const day = this.randomIntNumber(1, 29);
    const month = ["января", "февраля", "марта", "апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]
    const monthRand=Math.floor(Math.random() * month.length);
    const year = this.randomIntNumber(1920, 2020);
    return day +" "+ month[monthRand] +" "+ year;
  },
  randomProfession:function(){
      const profession = ['програмист','бизнесмен','повар','солдат','слесарь','архитектор','дизайнер','учитель','актер','полицейский','депутат','дворник','суетолог','барыга'];
      const feProfession =['эскотрница','медсестра','домохозяйка','няня','уборщица','психологиня','поэтесса','дизайнерка','шахтерка']
     
      if(this.person.gender==="Мужчина"){
        const professionRand= Math.floor(Math.random() * profession.length);
          return profession[professionRand];
      }
      else{
        const professionRand= Math.floor(Math.random() * feProfession.length);
        return feProfession[professionRand];
      }
  },
  getPerson: function () {
    this.person = {};
    this.person.gender = this.randomGender();
    this.person.firstName = this.randomFirstName();
    this.person.surname = this.randomSurname();
    this.person.year = this.randomYear();
    this.person.profession=this.randomProfession();
    return this.person;
  },

}
  
  

