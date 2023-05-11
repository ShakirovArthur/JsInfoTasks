
class UserService {
    // Эти два св-ва надо удалить, так как мы не определяем для них начальное значение здесь
    var username;
    var password;
    
    constructor(username,password){
      this.username = username;
      this.password = password;
    }
    
    get username() {
        // Предполагалось, что данный геттер возвращает статическое св-во класса, но оно не объвленно как статическое,
        // Чтобы данный метод возвращал св-во экземпляра, надо заменить UserService.usernmae на this.username
        return UserService.username;
  
    }

    get password() {
        // Данный геттер можно либо убрать (так как он ничего не возвращает), либо сделать св-во password приватным 
        throw 'You are not allowed to get password'
    }

        // Метод не является статическим, так как в данном методе нам нужно обратиться к экземпляру класса
    static authenticate_user() {
        // Заменить на fetch
        let xhr = new XMLHttpRequest();
        // UserService.username и UserService.password нужно заменить на this.username и this.password, так как эти значения лежат в экзмепляре класса
        xhr.open('GET' , `https://example.com/api/user/authenticate?username=` + UserService.username + `&password=` + UserService.password, true);
        xhr.responseType = 'json';

        // Переменная result объявлена как константа, но ниже в коде ее значение изменяется, следовательно нужно заменить const на let
        const result = false;
        
        // Здесь нужно обернуть в промис, чтобы получить релевантное значение result, и в вызывающем коде добавить обработчики для промиса 
        xhr.onload = function() {
            // При проверке статуса ответа сервера нужно сравнивать с числом, а не со строкой
            if(xhr.status !== '200'){
                result = xhr.response;
            } else {
                result = true;
            }
        };

        return result;
    }
  }

  

  $('form #login').click(function () {
    // var устаревший способ задавать переменные, нужно использовать const
    var username = $('#username');
    var password = $('#password');
    
    // В строках ниже есть несколько проблем:
    // 1) var - это устаревший способ создавать переменные, надо использовать const/let
    // 2) для создания нового объекта используется ключевое слово new (то есть должно было быть let userService = new UserService(username,password)),
    // 3) метод authenticate_user() не является статическим, поэтому надо его вызывать res = userSerice.authenticate_user(), так как мы выше определились, что метод должен возвращать промис, мы должны добавить обработчики для промиса
    var res = UserService(username,password).authenticate_user();
    // Можно упростить проверку до if(res)
    if(res == true){
        document.location.href = '/home';
    } else {
        alert(res.error);
    }
  })

 // Как бы я это исправил:

 