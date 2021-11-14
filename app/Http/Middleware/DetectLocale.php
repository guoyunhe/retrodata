<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class DetectLocale
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if ($request->cookie('language')) {
            App::setLocale($request->cookie('language'));
        } else {
            $prefered_locale = substr($request->header('Accept-Language'), 0, 2);
            if ($prefered_locale === 'zh') {
                App::setLocale('zh');
            } else {
                App::setLocale('en');
            }
        }

        return $next($request);
    }
}
