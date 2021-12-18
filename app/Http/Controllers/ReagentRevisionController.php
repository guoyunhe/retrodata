<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreReagentRevisionRequest;
use App\Http\Requests\UpdateReagentRevisionRequest;
use App\Models\ReagentRevision;

class ReagentRevisionController extends Controller
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
     * @param  \App\Http\Requests\StoreReagentRevisionRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreReagentRevisionRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ReagentRevision  $reagentRevision
     * @return \Illuminate\Http\Response
     */
    public function show(ReagentRevision $reagentRevision)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateReagentRevisionRequest  $request
     * @param  \App\Models\ReagentRevision  $reagentRevision
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateReagentRevisionRequest $request, ReagentRevision $reagentRevision)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ReagentRevision  $reagentRevision
     * @return \Illuminate\Http\Response
     */
    public function destroy(ReagentRevision $reagentRevision)
    {
        //
    }
}
