<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name') }}</title>

    <!-- Scripts -->
    <script>
        window.appName = "<?= config('app.name') ?>";
        window.appUrl = "<?= config('app.url') ?>";
        window.appDomain = "<?= config('app.domain') ?>";
        window.user = <?= auth()->user() ? auth()->user()->toJson() : 'null' ?>;
        window.university = <?= !empty($university) ? $university->toJson() : 'null' ?>;
    </script>

    <script src="{{ asset('js/manifest.js') }}" defer></script>
    <script src="{{ asset('js/vendor.js') }}" defer></script>
    <script src="{{ asset('js/app.js') }}" defer></script>
</head>

<body>
    <div id="app-root"></div>
</body>

</html>
