<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>BlogDeCafé</title>
  <meta name="description" content="Página web de blog de café" />

  <!-- Prefetch -->
  <link rel="prefetch" href="nosotros.php" as="document" />

  <!-- Preload -->
  <link rel="preload" href="css/normalize.css" as="style" />
  <link rel="stylesheet" href="css/normalize.css" />

  <link
    rel="preload"
    href="https://fonts.googleapis.com/css2?family=Open+Sans&family=PT+Sans:wght@400;700&display=swap"
    crossorigin="crossorigin"
    as="font" />
  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans&family=PT+Sans:wght@400;700&display=swap"
    rel="stylesheet" />

  <link rel="preload" href="css/style.css" as="style" />
  <link rel="stylesheet" href="css/style.css" />
</head>

<body>
  <header class="header">
    <div class="contenedor">
      <div class="barra">
        <a class="logo" href="index.php">
          <h1 class="logo__nombre no-margin centrar-texto">
            Blog<span class="logo__bold">DeCafé</span>
          </h1>
        </a>

        <nav class="navegacion">
          <a href="nosotros.php" class="navegacion__enlace">Nosotros</a>
          <a href="cursos.php" class="navegacion__enlace">Cursos</a>
          <a href="contacto.php" class="navegacion__enlace">Contacto</a>
        </nav>
      </div>
    </div>

    <div class="header__texto">
      <h2 class="no-margin">Blog de café con consejos y cursos</h2>
      <p class="no-margin">
        Aprende de los expertos con las mejores recetas y consejos
      </p>
    </div>
  </header>