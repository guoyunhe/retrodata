<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreReagentProductRequest;
use App\Http\Requests\UpdateReagentProductRequest;
use App\Models\ReagentProduct;

class ReagentProductController extends Controller
{
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
     * @param  \App\Http\Requests\StoreReagentProductRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreReagentProductRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ReagentProduct  $reagentProduct
     * @return \Illuminate\Http\Response
     */
    public function show(ReagentProduct $reagentProduct)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateReagentProductRequest  $request
     * @param  \App\Models\ReagentProduct  $reagentProduct
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateReagentProductRequest $request, ReagentProduct $reagentProduct)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ReagentProduct  $reagentProduct
     * @return \Illuminate\Http\Response
     */
    public function destroy(ReagentProduct $reagentProduct)
    {
        //
    }
}
