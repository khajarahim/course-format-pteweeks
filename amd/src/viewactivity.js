// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

define(['jquery','core/config'],function($,mdlcfg) {
    return {
        init: function() {
            $(".pteactivity").change(function() {
                if($(this).val()){
                    var splitedvalue = $(this).val().split('_');
                    window.location.href = mdlcfg.wwwroot+"/mod/"+splitedvalue[0]+"/view.php?id="+splitedvalue[1];
                }
            });
        }
    };
});
