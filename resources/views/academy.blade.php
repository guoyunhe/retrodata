<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ $university->name }}</title>

    <!-- Scripts -->
    <script>
        window.user = <?= auth()->user() ? auth()->user()->toJson() : 'null' ?>;
        window.university = <?= !empty($university) ? $university->toJson() : 'null' ?>;
    </script>

    <script src="{{ asset('js/manifest.js') }}" defer></script>
    <script src="{{ asset('js/vendor.js') }}" defer></script>
    <script src="{{ asset('js/academy.js') }}" defer></script>
</head>

<body>
    <div id="app-root"></div>
</body>

</html>
