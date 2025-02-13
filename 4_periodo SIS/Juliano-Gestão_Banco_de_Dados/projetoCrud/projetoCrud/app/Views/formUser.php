<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Edição</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
<div class="container">
  <div class="row">
    <div class="col mt-4 mb-4">
      <h2>Usuário</h2>
    </div>
  </div>
    <?php echo form_open('user/store'); ?>

    <div class="row g-3">
        <div class="col-md-6">
            <label for="firstname" class="form-label">First name</label>
            <input type="text" class="form-control" id="firstName" name="firstName" value="<?=isset($user['firstName'])?$user['firstName']:'';?>">
        </div>
        <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Last name</label>
            <input type="text" class="form-control" id="lastName" name="lastName" value="<?=isset($user['lastName'])?$user['lastName']:'';?>">
        </div>
        <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail4" name="email" value="<?=isset($user['email'])?$user['email']:'';?>">
        </div>
        <div class="col-md-6">
            <label for="inputPassword4" class="form-label">Password</label>
            <input type="password" class="form-control" id="inputPassword4" name="password" value="<?=isset($user['password'])?$user['password']:'';?>">
        </div>

      <input type="hidden" name="id"  value="<?=isset($user['id'])?$user['id']:'';?>">
        <div class="col-12 text-center">
            <button type="submit" class="btn btn-primary">Enviar</button>
        </div>
    </div>
    <?php echo form_close(); ?>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
</body>
</html>