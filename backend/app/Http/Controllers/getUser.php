<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;

class getUser extends Controller
{
    public function getId($email)
    {
        $userId = DB::select("SELECT id from users where email ='$email '");
        return response()->json($userId, 200);
    }
}
