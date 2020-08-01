<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

if (isset($_POST['email'])) {
  // Переменные, которые отправляет пользователь
  $email = $_POST['email'];

  // Формирование самого письма
  $title = "Новaя подписка Best Tour Plan";
  $body = "
  <h2>Новaя подписка на рассылку</h2>
  <b>E-mail:</b> $email<br>
  ";

  // Настройки PHPMailer
  $mail = new PHPMailer\PHPMailer\PHPMailer();
  try {
      $mail->isSMTP();
      $mail->CharSet = "UTF-8";
      $mail->SMTPAuth   = true;
      // $mail->SMTPDebug = 2;
      $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

      // Настройки вашей почты
      $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
      $mail->Username   = 'besttour.plan@gmail.com'; // Логин на почте
      $mail->Password   = 'B3fI9jd1'; // Пароль на почте
      $mail->SMTPSecure = 'ssl';
      $mail->Port       = 465;
      $mail->setFrom('besttour.plan@gmail.com', 'Best Tour Plan Admin'); // Адрес самой почты и имя отправителя

      // Получатель письма
      $mail->addAddress('pl.hancharou@gmail.com');

      // Отправка сообщения
      $mail->isHTML(true);
      $mail->Subject = $title;
      $mail->Body = $body;

  // Проверяем отравленность сообщения
  if ($mail->send()) {$result = "success";}
  else {$result = "error";}

  } catch (Exception $e) {
      $result = "error";
      $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
  }

  // Отображение результата
  header('Location: subscription.html');
} else if (isset($_POST['message'])) {
  // Переменные, которые отправляет пользователь
  $name = $_POST['name'];
  $message = $_POST['message'];
  $phone = $_POST['phone'];

    // Формирование самого письма
  $title = "Новое обращение Best Tour Plan";
  $body = "
  <h2>Новое обращение</h2>
  <b>Имя:</b> $name<br>
  <b>Телефон:</b> $phone<br><br>
  <b>Сообщение:</b><br>$message
  ";

  // Настройки PHPMailer
  $mail = new PHPMailer\PHPMailer\PHPMailer();
  try {
      $mail->isSMTP();
      $mail->CharSet = "UTF-8";
      $mail->SMTPAuth   = true;
      // $mail->SMTPDebug = 2;
      $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

      // Настройки вашей почты
      $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
      $mail->Username   = 'besttour.plan@gmail.com'; // Логин на почте
      $mail->Password   = 'B3fI9jd1'; // Пароль на почте
      $mail->SMTPSecure = 'ssl';
      $mail->Port       = 465;
      $mail->setFrom('besttour.plan@gmail.com', 'Best Tour Plan Admin'); // Адрес самой почты и имя отправителя

      // Получатель письма
      $mail->addAddress('pl.hancharou@gmail.com');

      // Отправка сообщения
      $mail->isHTML(true);
      $mail->Subject = $title;
      $mail->Body = $body;

  // Проверяем отравленность сообщения
  if ($mail->send()) {$result = "success";}
  else {$result = "error";}

  } catch (Exception $e) {
      $result = "error";
      $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
  }
      // Отображение результата
  header('Location: thank.html');
} else if (isset($_POST['user'])) {
  // Переменные, которые отправляет пользователь
  $name = $_POST['user'];
  $phone = $_POST['phone'];
  $email = $_POST['mail'];
  $message = $_POST['text'];

    // Формирование самого письма
  $title = "Новый запрос информации Best Tour Plan";
  $body = "
  <h2>Новое письмо</h2>
  <b>Имя:</b> $name<br>
  <b>Телефон:</b> $phone<br>
  <b>E-mail:</b> $email<br><br>
  <b>Сообщение:</b><br>$message
  ";

  // Настройки PHPMailer
  $mail = new PHPMailer\PHPMailer\PHPMailer();
  try {
      $mail->isSMTP();
      $mail->CharSet = "UTF-8";
      $mail->SMTPAuth   = true;
      // $mail->SMTPDebug = 2;
      $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

      // Настройки вашей почты
      $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
      $mail->Username   = 'besttour.plan@gmail.com'; // Логин на почте
      $mail->Password   = 'B3fI9jd1'; // Пароль на почте
      $mail->SMTPSecure = 'ssl';
      $mail->Port       = 465;
      $mail->setFrom('besttour.plan@gmail.com', 'Best Tour Plan Admin'); // Адрес самой почты и имя отправителя

      // Получатель письма
      $mail->addAddress('pl.hancharou@gmail.com');

      // Отправка сообщения
      $mail->isHTML(true);
      $mail->Subject = $title;
      $mail->Body = $body;

  // Проверяем отравленность сообщения
  if ($mail->send()) {$result = "success";}
  else {$result = "error";}

  } catch (Exception $e) {
      $result = "error";
      $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
  }
      // Отображение результата
  header('Location: index.html');
}