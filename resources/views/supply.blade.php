<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ auth()->user()->name }}</title>
    <script>
        window.user = <?= auth()->user() ? auth()->user()->toJson() : 'null' ?>;
    </script>
    <script src="{{ asset('js/manifest.js') }}" defer></script>
    <script src="{{ asset('js/vendor.js') }}" defer></script>
    <script src="{{ asset('js/admin.js') }}" defer></script>
</head>

<body>
    <div id="app-root"></div>
</body>

</html>
