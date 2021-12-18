<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreReagentRequest;
use App\Http\Requests\UpdateReagentRequest;
use App\Models\Reagent;

class ReagentController extends Controller
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
     * @param  \App\Http\Requests\StoreReagentRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreReagentRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Reagent  $reagent
     * @return \Illuminate\Http\Response
     */
    public function show(Reagent $reagent)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateReagentRequest  $request
     * @param  \App\Models\Reagent  $reagent
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateReagentRequest $request, Reagent $reagent)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Reagent  $reagent
     * @return \Illuminate\Http\Response
     */
    public function destroy(Reagent $reagent)
    {
        //
    }
}
