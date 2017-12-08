<template>
    <!-- MODAL STICK UP  -->
    <div class="modal fade stick-up" id="confirmModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
         aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header clearfix text-left">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                        <i class="pg-close fs-14"></i>
                    </button>
                    <h5>操作 <span class="semi-bold">确认框</span></h5>
                    <p class="m-t-10" id="confirm_msg"></p>
                </div>
                <div class="modal-body">
                    <div class="text-center m-t-10">
                        <button class="btn btn-success m-r-20" id="confirm_success">确 认</button>
                        <button class="btn btn-default" id="confirm_error">取 消</button>
                    </div>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- END MODAL STICK UP  -->
</template>