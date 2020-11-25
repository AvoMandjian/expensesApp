<?php

namespace App\Http\Controllers;

use App\Models\Expenses;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class ExpensesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Expenses::get(), 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
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
        // WE HAVE TO USE VALIDATOR SO WE VALIDATE THE REQUESTS LIKE PASSWORD MUST BE * CHARACTER
        $request->validate(
            [
                'name' => 'required',

            ]
        );
        $expense = Expenses::create($request->all());
        return response()->json($expense, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Expenses  $expenses
     * @return \Illuminate\Http\Response
     */

    public function showUserExpenses($id)
    {
        $expense = Expenses::find($id);
        return response()->json($expense, 200);
    }
    public function show($id)
    {
        $expenses = DB::select("SELECT  expenses.* ,users.email, categories.name as category_name
        FROM expenses
        INNER JOIN users ON expenses.user_id=users.id
        INNER JOIN categories ON expenses.category_id=categories.id
        WHERE users.id='$id'
        ORDER BY expenses.id DESC");


        // $expenses = DB::table('expenses')
        //     ->join('users', 'expenses.user_id', '=', 'users.id')
        //     ->join('categories', 'expenses.category_id', '=', 'categories.id', 'inner', "users.email=$email")
        //     ->select('Expenses.*', 'users.name', 'categories.name')
        //     ->get();

        return response()->json($expenses, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Expenses  $expenses
     * @return \Illuminate\Http\Response
     */
    public function edit(Expenses $expenses)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Expenses  $expenses
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $expense = Expenses::find($id);
        $expense->update($request->all());
        return response()->json($expense, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Expenses  $expenses
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Expenses::find($id)->delete();
        return response()->json(null, 204);
    }
}
