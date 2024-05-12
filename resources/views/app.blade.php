<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <title inertia>{{ $title ?? "" }}</title>
    <meta name="description" content="{{ $description }}" inertia>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link rel="canonical" href="{{ url()->current() }}">

    @routes('frontend')
    @vite('resources/js/app.js')
    @vite('resources/css/app.css')
    @vite('resources/css/fonts/Fira Code/stylesheet.css')
    @inertiaHead
  </head>
  <body class="dark">
        @inertia
  </body>
</html>
