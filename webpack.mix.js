const mix = require('laravel-mix');

// // Main CSS
// mix.styles([

//     // Plugins
//     'assets/bootstrap/css/bootstrap.css',
//     'assets/jquery-ui/jquery-ui.min.css',
//     'assets/font-awesome/css/font-awesome.css',
//     'assets/morris/morris.css',
//     'assets/select2/select2.min.css',
//     'assets/datepicker/datepicker3.css',
//     'assets/timepicker/bootstrap-timepicker.css',
//     'assets/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css',
//     'assets/perfectScroll/css/perfect-scrollbar.css',
//     'assets/toastr/toastr.min.css',

//     // Filemanager
//     'assets/manu077/css/filemanager/dialogs.css',
//     'assets/manu077/css/filemanager/main.css',

//     // Theme
//     'assets/manu077/css/theme.css',
//     'assets/manu077/css/skins/skin-black.css',
//     'assets/manu077/css/skins/skin-blue.css',
//     'assets/manu077/css/skins/skin-green.css',
//     'assets/manu077/css/skins/skin-red.css',
//     'assets/manu077/css/skins/skin-yellow.css',

//     // DataTable
//     'assets/DataTables/datatables.min.css',

//     // Main CSS
//     'assets/manu077/css/main.css',

//     // Responsive CSS
//     'assets/manu077/css/responsive.css',

//     // Barcode CSS
//     // 'assets/manu077/css/barcode.css',

//     // Print CSS
//     'assets/manu077/css/print.css',

// ],'assets/manu077/cssmin/main.css');



// // POS CSS
// mix.styles([

//     'assets/bootstrap/css/bootstrap.css',
//     'assets/jquery-ui/jquery-ui.min.css',
//     'assets/font-awesome/css/font-awesome.css',
//     'assets/datepicker/datepicker3.css',
//     'assets/timepicker/bootstrap-timepicker.min.css',
//     'assets/perfectScroll/css/perfect-scrollbar.css',
//     'assets/select2/select2.min.css',
//     'assets/toastr/toastr.min.css',
//     'assets/contextMenu/dist/jquery.contextMenu.min.css',

//     // Filemanager
//     'assets/manu077/css/filemanager/dialogs.css',
//     'assets/manu077/css/filemanager/main.css',

//     // Theme
//     'assets/manu077/css/theme.css',
//     'assets/manu077/css/skins/skin-black.css',
//     'assets/manu077/css/skins/skin-blue.css',
//     'assets/manu077/css/skins/skin-green.css',
//     'assets/manu077/css/skins/skin-red.css',
//     'assets/manu077/css/skins/skin-yellow.css',
//     'assets/manu077/css/main.css',

//     // Main
//     'assets/manu077/css/pos/skeleton.css',
//     'assets/manu077/css/pos/pos.css',
//     'assets/manu077/css/pos/responsive.css',

// ],'assets/manu077/cssmin/pos.css');



// // LOGIN CSS
// mix.styles([

//     'assets/bootstrap/css/bootstrap.css',
//     'assets/perfectScroll/css/perfect-scrollbar.css',
//     'assets/toastr/toastr.min.css',
//     'assets/manu077/css/theme.css',
//     'assets/manu077/css/login.css',

// ],'assets/manu077/cssmin/login.css');



// Angular JS
mix.scripts([

    'assets/manu077/angular/lib/angular/angular.min.js',
    'assets/manu077/angular/lib/angular/angular-sanitize.js',
    'assets/manu077/angular/lib/angular/angular-bind-html-compile.min.js',
    'assets/manu077/angular/lib/angular/ui-bootstrap-tpls-2.5.0.min.js',
    'assets/manu077/angular/lib/angular/angular-route.min.js',
    'assets/manu077/angular/lib/angular-translate/dist/angular-translate.min.js',
    'assets/manu077/angular/lib/ng-file-upload/dist/ng-file-upload.min.js',
    'assets/manu077/angular/lib/angular-local-storage.min.js',
    'assets/manu077/angular/angularApp.js',
    
],'assets/manu077/angularmin/angular.js');

// Angular Filemanager JS
mix.scripts([

    'assets/manu077/angular/filemanager/js/directives/directives.js',
    'assets/manu077/angular/filemanager/js/filters/filters.js',
    'assets/manu077/angular/filemanager/js/providers/config.js',
    'assets/manu077/angular/filemanager/js/entities/chmod.js',
    'assets/manu077/angular/filemanager/js/entities/item.js',
    'assets/manu077/angular/filemanager/js/services/apihandler.js',
    'assets/manu077/angular/filemanager/js/services/apimiddleware.js',
    'assets/manu077/angular/filemanager/js/services/filenavigator.js',
    'assets/manu077/angular/filemanager/js/providers/translations.js',
    'assets/manu077/angular/filemanager/js/controllers/main.js',
    'assets/manu077/angular/filemanager/js/controllers/selector-controller.js',

],'assets/manu077/angularmin/filemanager.js');



// Angular Modal JS
mix.scripts([

    'assets/manu077/angular/modals/InvoiceViewModal.js',
    'assets/manu077/angular/modals/InvoiceInfoEditModal.js',
    'assets/manu077/angular/modals/BoxCreateModal.js',
    'assets/manu077/angular/modals/BoxDeleteModal.js',
    'assets/manu077/angular/modals/BoxEditModal.js',
    'assets/manu077/angular/modals/UnitCreateModal.js',
    'assets/manu077/angular/modals/UnitDeleteModal.js',
    'assets/manu077/angular/modals/UnitEditModal.js',
    'assets/manu077/angular/modals/TaxrateCreateModal.js',
    'assets/manu077/angular/modals/TaxrateDeleteModal.js',
    'assets/manu077/angular/modals/TaxrateEditModal.js',
    'assets/manu077/angular/modals/CategoryCreateModal.js',
    'assets/manu077/angular/modals/CategoryDeleteModal.js',
    'assets/manu077/angular/modals/CategoryEditModal.js',
    'assets/manu077/angular/modals/CurrencyEditModal.js',
    'assets/manu077/angular/modals/CustomerCreateModal.js',
    'assets/manu077/angular/modals/CustomerDeleteModal.js',
    'assets/manu077/angular/modals/CustomerEditModal.js',
    'assets/manu077/angular/modals/SupportDeskModal.js',
    'assets/manu077/angular/modals/DueCollectionDetailsModal.js',
    'assets/manu077/angular/modals/BankingDepositModal.js',
    'assets/manu077/angular/modals/BankingRowViewModal.js',
    'assets/manu077/angular/modals/BankingWithdrawModal.js',
    'assets/manu077/angular/modals/BankAccountCreateModal.js',
    'assets/manu077/angular/modals/BankAccountDeleteModal.js',
    'assets/manu077/angular/modals/BankAccountEditModal.js',
    'assets/manu077/angular/modals/BankTransferModal.js',
    'assets/manu077/angular/modals/EmailModal.js',
    'assets/manu077/angular/modals/KeyboardShortcutModal.js',
    'assets/manu077/angular/modals/PmethodDeleteModal.js',
    'assets/manu077/angular/modals/PmethodEditModal.js',
    'assets/manu077/angular/modals/PayNowModal.js',
    'assets/manu077/angular/modals/POSFilemanagerModal.js',
    'assets/manu077/angular/modals/POSReceiptTemplateEditModal.js',
    'assets/manu077/angular/modals/PrinterDeleteModal.js',
    'assets/manu077/angular/modals/PrinterEditModal.js',
    'assets/manu077/angular/modals/PrintReceiptModal.js',
    'assets/manu077/angular/modals/ProductCreateModal.js',
    'assets/manu077/angular/modals/ProductDeleteModal.js',
    'assets/manu077/angular/modals/ProductEditModal.js',
    'assets/manu077/angular/modals/ProductReturnModal.js',
    'assets/manu077/angular/modals/ProductViewModal.js',
    'assets/manu077/angular/modals/StoreDeleteModal.js',
    'assets/manu077/angular/modals/SupplierCreateModal.js',
    'assets/manu077/angular/modals/SupplierDeleteModal.js',
    'assets/manu077/angular/modals/SupplierEditModal.js',
    'assets/manu077/angular/modals/BrandCreateModal.js',
    'assets/manu077/angular/modals/BrandDeleteModal.js',
    'assets/manu077/angular/modals/BrandEditModal.js',
    'assets/manu077/angular/modals/UserCreateModal.js',
    'assets/manu077/angular/modals/UserDeleteModal.js',
    'assets/manu077/angular/modals/UserEditModal.js',
    'assets/manu077/angular/modals/UserGroupCreateModal.js',
    'assets/manu077/angular/modals/UserGroupDeleteModal.js',
    'assets/manu077/angular/modals/UserGroupEditModal.js',
    'assets/manu077/angular/modals/UserInvoiceDetailsModal.js',
    'assets/manu077/angular/modals/GiftcardCreateModal.js',
    'assets/manu077/angular/modals/GiftcardEditModal.js',
    'assets/manu077/angular/modals/GiftcardViewModal.js',
    'assets/manu077/angular/modals/GiftcardTopupModal.js',
    'assets/manu077/angular/modals/InvoiceSMSModal.js',
    'assets/manu077/angular/modals/PaymentFormModal.js',
    'assets/manu077/angular/modals/PaymentOnlyModal.js',
    'assets/manu077/angular/modals/PurchaseInvoiceViewModal.js',
    'assets/manu077/angular/modals/PurchaseInvoiceInfoEditModal.js',
    'assets/manu077/angular/modals/PurchasePaymentModal.js',
    'assets/manu077/angular/modals/SellReturnModal.js',
    'assets/manu077/angular/modals/PurchaseReturnModal.js',
    'assets/manu077/angular/modals/ExpenseSummaryModal.js',
    'assets/manu077/angular/modals/SummaryReportModal.js',
    
],'assets/manu077/angularmin/modal.js');



// Main JS
mix.scripts([

    'assets/jquery/jquery.min.js',
    'assets/jquery-ui/jquery-ui.min.js',
    'assets/bootstrap/js/bootstrap.min.js',
    'assets/chartjs/Chart.min.js',
    'assets/sparkline/jquery.sparkline.min.js',
    'assets/datepicker/bootstrap-datepicker.js',
    'assets/timepicker/bootstrap-timepicker.min.js',
    'assets/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js',
    'assets/select2/select2.min.js',
    'assets/perfectScroll/js/perfect-scrollbar.jquery.min.js',
    'assets/sweetalert/sweetalert.min.js',
    'assets/toastr/toastr.min.js',
    'assets/accounting/accounting.min.js',
    'assets/underscore/underscore.min.js',
    'assets/manu077/js/ie.js',
    'assets/manu077/js/theme.js',
    'assets/manu077/js/common.js',
    'assets/manu077/js/main.js',
    'assets/DataTables/datatables.min.js',
    'assets/manu077/angularmin/angular.js',
    'assets/manu077/angularmin/modal.js',
    'assets/manu077/angularmin/filemanager.js',

],'assets/manu077/jsmin/main.js');



// POS JS
mix.scripts([

    'assets/jquery/jquery.min.js',
    'assets/jquery-ui/jquery-ui.min.js',
    'assets/bootstrap/js/bootstrap.min.js',
    'assets/manu077/angularmin/angular.js',
    'assets/manu077/angular/angularApp.js',
    'assets/manu077/angularmin/filemanager.js',
    'assets/manu077/angularmin/modal.js',

    'assets/datepicker/bootstrap-datepicker.js',
    'assets/timepicker/bootstrap-timepicker.min.js',
    'assets/select2/select2.min.js',
    'assets/perfectScroll/js/perfect-scrollbar.jquery.min.js',
    'assets/sweetalert/sweetalert.min.js',
    'assets/toastr/toastr.min.js',
    'assets/accounting/accounting.min.js',
    'assets/underscore/underscore.min.js',
    'assets/contextMenu/dist/jquery.contextMenu.min.js',
    'assets/manu077/js/ie.js',

    'assets/manu077/js/common.js',
    'assets/manu077/js/main.js',
    'assets/manu077/js/pos/pos.js',

],'assets/manu077/jsmin/pos.js');


// LOGIN JS
mix.scripts([

    'assets/jquery/jquery.min.js',
    'assets/bootstrap/js/bootstrap.min.js',
    'assets/perfectScroll/js/perfect-scrollbar.jquery.min.js',
    'assets/toastr/toastr.min.js',
    'assets/manu077/js/forgot-password.js',
    'assets/manu077/js/common.js',
    'assets/manu077/js/login.js',

],'assets/manu077/jsmin/login.js');



// How to build assets
// npm run dev
// npm run production