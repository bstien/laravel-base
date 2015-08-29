<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="{!! asset('css/app.css') !!}">
    </head>
    <body>

		{{-- Container --}}
		<div class="container-fluid">
			@yield('content')
		</div>

		<script src="{!! asset('js/all.js') !!}"></script>
    </body>
</html>