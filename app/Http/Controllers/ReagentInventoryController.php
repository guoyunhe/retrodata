<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreReagentInventoryRequest;
use App\Http\Requests\UpdateReagentInventoryRequest;
use App\Models\ReagentInventory;

class ReagentInventoryController extends Controller
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
     * @param  \App\Http\Requests\StoreReagentInventoryRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreReagentInventoryRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ReagentInventory  $reagentInventory
     * @return \Illuminate\Http\Response
     */
    public function show(ReagentInventory $reagentInventory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateReagentInventoryRequest  $request
     * @param  \App\Models\ReagentInventory  $reagentInventory
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateReagentInventoryRequest $request, ReagentInventory $reagentInventory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ReagentInventory  $reagentInventory
     * @return \Illuminate\Http\Response
     */
    public function destroy(ReagentInventory $reagentInventory)
    {
        //
    }
}
