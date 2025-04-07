# Тестовое задание

*Есть проект, написанный на ReactJS (TypeScript).  
Он предоставляется в виде zip файла.  
Необходимо запустить web приложение. С помощью специального API, получить токен для  
формы и протестировать работу платежной формы.  
Найти не менее 5-ти проблемных момента (ошибки в коде, ошибки в UX и т.д.) и  
предложить варианты их улучшения.  
Для 3-х таких проблемных момента (выбираете сами) необходимо реализовать  
исправления с комментариями внутри кода почему их исправили и что сделали.*

## Технические ошибки
- Captcha не работает валидно при локальном запуске.\
`Invalid domain. Contact the Site Administrator if this problem persists.` \
***Решение:***\
*Я создал 3 .env файла для каждого режима разпуска development production npf. В каждом из которых хранится sitekey от cloudflare. И если запустить проект в режимме разработки то sitekey будет `1x00000000000000000000AA`, что позволит дальше тестировать приложение

- Функция renderStep\
В switch лучше проверять значение состояния в currentStep для рендера соответсвующего этапа операции
- Внутри кейса `in_progress` стоит использовать еще один switch case так как проевряется одно и то же значение
    \
     Также значение на проверку стоит использовать  уже созданный state paymentMethodName
     \
     Примерный код будет выглядеть так:
```tsx
 const renderStep = () => {

    switch (currentStep) {
      case 'init':
        return <Refill_initial {...}/>};

      case 'precreated':         
      case 'created':
        return <Refill_methods {...}/>;
      case 'in_progress':        

        switch (paymentMethodName) {
            case TypePaymentMethodEnum.sbp:
            case TypePaymentMethodEnum.transgranSBP:
                return <Refill_SBP {...}/>;

            case TypePaymentMethodEnum.toCard:
                return <Invoice {...}/>;

            case TypePaymentMethodEnum.transgran:
                return <InvoiceTransgran {...}/>;

            case TypePaymentMethodEnum.toAccount:
                return <Transfer {...}/>;

            default:
                return null;
            }


        case 'success':
          return <Success_modal {...} />;

        case 'failed':
          return <Fail_modal {...} />;
      default:
        return null;
    }
  };
```
## Архитектурные ошибки
- Почти вся логика находится внутри MainPage. \
 Стоит вынести запросы к API в одтельную папку services или requests. А UI логику - состояния свитчи хэндлеры вынести в отдельные компоненты.\
 Как альтернативный вариант как раз для функицонала поэтапной платежной системы,можно вынести всю логику в папку processes и все этапы обрабатывать там. Главное чтобы страницы были максимально просты и прозрачны.

## UI/UX ошибки
- Использовать кастомный UI компонент Button и правильно передавать параметр disabled\
***Решение:***
```html
<Button
    text="Выбрать"
    disabled={!turnstileToken}
    onClick={selectPayment}
    />
```
- Вместо добавления слушателя событий в div передовать функцию через пропс в компонент Method и уде там передовать его в Button для обработки\
***Решение:***
```html
<div>//див без onClick
    <Method
        title="Номер карты"
        text="Перевод по номеру карты."
        icon={<Card />}
        selectPayment={() => handleSelectPaymentMethod("toCard")}/>
    <div>
```

## Прочие ошибки

- При отправки запроса на эндпоинт `https://paymentform.thebestform.tech/paymentformapi/paymentform/payment` сервер возвращает статус 200 ок ответ но в теле ответа статус warning и data null. В сообщении сказано not human. Отсюда следует что пробема с капчей, но что с DUMMYTOKEN что с настоящим токеном, что с постмана, никакие данные не возвращаются.

- Также в коде есть несколько маленьких ошибок по типу проверка на null, орфаграфические ошибки лишние импорты и закоментированный код. 