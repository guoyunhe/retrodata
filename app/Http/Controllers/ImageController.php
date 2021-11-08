<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            // 30MiB
            'image' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:30000',
            'width' => 'integer|min:100|max:2000',
            'height' => 'integer|min:100|max:2000',
            'cropped' => 'boolean',
        ]);


        $path = $request->file('image')->store('public/images');
        $thumb_path = $path . '_thumb';
        $gmagick = new Gmagick($path);
        if ($request->boolean('cropped', false)) {
            $gmagick->cropthumbnailimage($request->input('width', 1200), $request->input('height', 1200));
        } else {
            $gmagick->thumbnailimage($request->input('width', 1200), $request->input('height', 1200), true);
        }
        $gmagick->write($path);

        $image = new Image;

        $image->path = $path;
        $image->width = $gmagick->getimagewidth();
        $image->height = $gmagick->getimageheight();

        $image->save();

        return $image;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function show(Image $image)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function destroy(Image $image)
    {
        //
    }
}
