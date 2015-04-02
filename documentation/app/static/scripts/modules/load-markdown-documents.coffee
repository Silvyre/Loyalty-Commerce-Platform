define [
  "mdown!../../documents/api/account-credentials-example.md"
  "mdown!../../documents/api/account-credentials.md"
  "mdown!../../documents/api/account-permissions-example.md"
  "mdown!../../documents/api/account-permissions.md"
  "mdown!../../documents/api/accounts-example.md"
  "mdown!../../documents/api/accounts.md"
  "mdown!../../documents/api/apps-example.md"
  "mdown!../../documents/api/apps.md"
  "mdown!../../documents/api/create-a-credit-example.md"
  "mdown!../../documents/api/create-a-credit.md"
  "mdown!../../documents/api/create-a-debit-example.md"
  "mdown!../../documents/api/create-a-debit.md"
  "mdown!../../documents/api/create-a-mv-delegate-example.md"
  "mdown!../../documents/api/create-a-mv-delegate.md"
  "mdown!../../documents/api/create-a-mv-example.md"
  "mdown!../../documents/api/create-a-mv.md"
  "mdown!../../documents/api/create-a-report-example.md"
  "mdown!../../documents/api/create-a-report-instance-example.md"
  "mdown!../../documents/api/create-a-report-instance.md"
  "mdown!../../documents/api/create-a-report.md"
  "mdown!../../documents/api/create-account-credentials-example.md"
  "mdown!../../documents/api/create-account-credentials.md"
  "mdown!../../documents/api/create-an-app-example.md"
  "mdown!../../documents/api/create-an-app.md"
  "mdown!../../documents/api/create-an-order-example.md"
  "mdown!../../documents/api/create-an-order.md"
  "mdown!../../documents/api/credits-example.md"
  "mdown!../../documents/api/credits.md"
  "mdown!../../documents/api/debits-example.md"
  "mdown!../../documents/api/debits.md"
  "mdown!../../documents/api/delete-account-credentials-example.md"
  "mdown!../../documents/api/delete-account-credentials.md"
  "mdown!../../documents/api/documentation-overview.md"
  "mdown!../../documents/api/get-a-credit-example.md"
  "mdown!../../documents/api/get-a-credit.md"
  "mdown!../../documents/api/get-a-debit-example.md"
  "mdown!../../documents/api/get-a-debit.md"
  "mdown!../../documents/api/get-a-mv-delegate-example.md"
  "mdown!../../documents/api/get-a-mv-delegate.md"
  "mdown!../../documents/api/get-a-mv-example.md"
  "mdown!../../documents/api/get-a-mv.md"
  "mdown!../../documents/api/get-a-report-example.md"
  "mdown!../../documents/api/get-a-report-instance-example.md"
  "mdown!../../documents/api/get-a-report-instance.md"
  "mdown!../../documents/api/get-a-report.md"
  "mdown!../../documents/api/get-account-credentials-example.md"
  "mdown!../../documents/api/get-account-credentials.md"
  "mdown!../../documents/api/get-account-permissions-example.md"
  "mdown!../../documents/api/get-account-permissions.md"
  "mdown!../../documents/api/get-an-account-example.md"
  "mdown!../../documents/api/get-an-account.md"
  "mdown!../../documents/api/get-an-app-by-mac-example.md"
  "mdown!../../documents/api/get-an-app-by-mac.md"
  "mdown!../../documents/api/get-an-app-example.md"
  "mdown!../../documents/api/get-an-app.md"
  "mdown!../../documents/api/get-an-order-example.md"
  "mdown!../../documents/api/get-an-order.md"
  "mdown!../../documents/api/get-live-credentials-example.md"
  "mdown!../../documents/api/get-live-credentials.md"
  "mdown!../../documents/api/get-live-permissions-example.md"
  "mdown!../../documents/api/get-live-permissions.md"
  "mdown!../../documents/api/get-report-instance-data-example.md"
  "mdown!../../documents/api/get-report-instance-data.md"
  "mdown!../../documents/api/get-sandbox-credentials-example.md"
  "mdown!../../documents/api/get-sandbox-credentials.md"
  "mdown!../../documents/api/list-all-apps-example.md"
  "mdown!../../documents/api/list-all-apps.md"
  "mdown!../../documents/api/list-all-credits-example.md"
  "mdown!../../documents/api/list-all-credits.md"
  "mdown!../../documents/api/list-all-debits-example.md"
  "mdown!../../documents/api/list-all-debits.md"
  "mdown!../../documents/api/list-all-live-permissions-example.md"
  "mdown!../../documents/api/list-all-live-permissions.md"
  "mdown!../../documents/api/list-all-orders-example.md"
  "mdown!../../documents/api/list-all-orders.md"
  "mdown!../../documents/api/list-all-report-instances-example.md"
  "mdown!../../documents/api/list-all-report-instances.md"
  "mdown!../../documents/api/list-all-reports-example.md"
  "mdown!../../documents/api/list-all-reports.md"
  "mdown!../../documents/api/live-credentials-example.md"
  "mdown!../../documents/api/live-credentials.md"
  "mdown!../../documents/api/live-permissions-example.md"
  "mdown!../../documents/api/live-permissions.md"
  "mdown!../../documents/api/loyalty-programs.md"
  "mdown!../../documents/api/member-validations-example.md"
  "mdown!../../documents/api/member-validations.md"
  "mdown!../../documents/api/mv-delegates-example.md"
  "mdown!../../documents/api/mv-delegates.md"
  "mdown!../../documents/api/orders-example.md"
  "mdown!../../documents/api/orders.md"
  "mdown!../../documents/api/release-notes.md"
  "mdown!../../documents/api/report-instances-example.md"
  "mdown!../../documents/api/report-instances.md"
  "mdown!../../documents/api/reports-example.md"
  "mdown!../../documents/api/reports.md"
  "mdown!../../documents/api/sandbox-credentials-example.md"
  "mdown!../../documents/api/sandbox-credentials.md"
  "mdown!../../documents/api/update-a-credit-example.md"
  "mdown!../../documents/api/update-a-credit.md"
  "mdown!../../documents/api/update-a-debit-example.md"
  "mdown!../../documents/api/update-a-debit.md"
  "mdown!../../documents/api/update-a-mv-example.md"
  "mdown!../../documents/api/update-a-mv.md"
  "mdown!../../documents/api/update-a-report-example.md"
  "mdown!../../documents/api/update-a-report.md"
  "mdown!../../documents/api/update-account-permissions-example.md"
  "mdown!../../documents/api/update-account-permissions.md"
  "mdown!../../documents/api/update-an-order-example.md"
  "mdown!../../documents/api/update-an-order.md"
  "mdown!../../documents/getting-started.md"
  "mdown!../../documents/reference-manual.md"
], (
  account_credentials_example
  account_credentials
  account_permissions_example
  account_permissions
  accounts_example
  accounts
  apps_example
  apps
  create_a_credit_example
  create_a_credit
  create_a_debit_example
  create_a_debit
  create_a_mv_delegate_example
  create_a_mv_delegate
  create_a_mv_example
  create_a_mv
  create_a_report_example
  create_a_report_instance_example
  create_a_report_instance
  create_a_report
  create_account_credentials_example
  create_account_credentials
  create_an_app_example
  create_an_app
  create_an_order_example
  create_an_order
  credits_example
  credits
  debits_example
  debits
  delete_account_credentials_example
  delete_account_credentials
  documentation_overview
  get_a_credit_example
  get_a_credit
  get_a_debit_example
  get_a_debit
  get_a_mv_delegate_example
  get_a_mv_delegate
  get_a_mv_example
  get_a_mv
  get_a_report_example
  get_a_report_instance_example
  get_a_report_instance
  get_a_report
  get_account_credentials_example
  get_account_credentials
  get_account_permissions_example
  get_account_permissions
  get_an_account_example
  get_an_account
  get_an_app_by_mac_example
  get_an_app_by_mac
  get_an_app_example
  get_an_app
  get_an_order_example
  get_an_order
  get_live_credentials_example
  get_live_credentials
  get_live_permissions_example
  get_live_permissions
  get_report_instance_data_example
  get_report_instance_data
  get_sandbox_credentials_example
  get_sandbox_credentials
  list_all_apps_example
  list_all_apps
  list_all_credits_example
  list_all_credits
  list_all_debits_example
  list_all_debits
  list_all_live_permissions_example
  list_all_live_permissions
  list_all_orders_example
  list_all_orders
  list_all_report_instances_example
  list_all_report_instances
  list_all_reports_example
  list_all_reports
  live_credentials_example
  live_credentials
  live_permissions_example
  live_permissions
  loyalty_programs
  member_validations_example
  member_validations
  mv_delegates_example
  mv_delegates
  orders_example
  orders
  release_notes
  report_instances_example
  report_instances
  reports_example
  reports
  sandbox_credentials_example
  sandbox_credentials
  update_a_credit_example
  update_a_credit
  update_a_debit_example
  update_a_debit
  update_a_mv_example
  update_a_mv
  update_a_report_example
  update_a_report
  update_account_permissions_example
  update_account_permissions
  update_an_order_example
  update_an_order
  getting_started
  reference_manual
) ->
  Markdown =
    account_credentials_example: account_credentials_example
    account_credentials: account_credentials
    account_permissions_example: account_permissions_example
    account_permissions: account_permissions
    accounts_example: accounts_example
    accounts: accounts
    apps_example: apps_example
    apps: apps
    create_a_credit_example: create_a_credit_example
    create_a_credit: create_a_credit
    create_a_debit_example: create_a_debit_example
    create_a_debit: create_a_debit
    create_a_mv_delegate_example: create_a_mv_delegate_example
    create_a_mv_delegate: create_a_mv_delegate
    create_a_mv_example: create_a_mv_example
    create_a_mv: create_a_mv
    create_a_report_example: create_a_report_example
    create_a_report_instance_example: create_a_report_instance_example
    create_a_report_instance: create_a_report_instance
    create_a_report: create_a_report
    create_account_credentials_example: create_account_credentials_example
    create_account_credentials: create_account_credentials
    create_an_app_example: create_an_app_example
    create_an_app: create_an_app
    create_an_order_example: create_an_order_example
    create_an_order: create_an_order
    credits_example: credits_example
    credits: credits
    debits_example: debits_example
    debits: debits
    delete_account_credentials_example: delete_account_credentials_example
    delete_account_credentials: delete_account_credentials
    documentation_overview: documentation_overview
    get_a_credit_example: get_a_credit_example
    get_a_credit: get_a_credit
    get_a_debit_example: get_a_debit_example
    get_a_debit: get_a_debit
    get_a_mv_delegate_example: get_a_mv_delegate_example
    get_a_mv_delegate: get_a_mv_delegate
    get_a_mv_example: get_a_mv_example
    get_a_mv: get_a_mv
    get_a_report_example: get_a_report_example
    get_a_report_instance_example: get_a_report_instance_example
    get_a_report_instance: get_a_report_instance
    get_a_report: get_a_report
    get_account_credentials_example: get_account_credentials_example
    get_account_credentials: get_account_credentials
    get_account_permissions_example: get_account_permissions_example
    get_account_permissions: get_account_permissions
    get_an_account_example: get_an_account_example
    get_an_account: get_an_account
    get_an_app_by_mac_example: get_an_app_by_mac_example
    get_an_app_by_mac: get_an_app_by_mac
    get_an_app_example: get_an_app_example
    get_an_app: get_an_app
    get_an_order_example: get_an_order_example
    get_an_order: get_an_order
    get_live_credentials_example: get_live_credentials_example
    get_live_credentials: get_live_credentials
    get_live_permissions_example: get_live_permissions_example
    get_live_permissions: get_live_permissions
    get_report_instance_data_example: get_report_instance_data_example
    get_report_instance_data: get_report_instance_data
    get_sandbox_credentials_example: get_sandbox_credentials_example
    get_sandbox_credentials: get_sandbox_credentials
    list_all_apps_example: list_all_apps_example
    list_all_apps: list_all_apps
    list_all_credits_example: list_all_credits_example
    list_all_credits: list_all_credits
    list_all_debits_example: list_all_debits_example
    list_all_debits: list_all_debits
    list_all_live_permissions_example: list_all_live_permissions_example
    list_all_live_permissions: list_all_live_permissions
    list_all_orders_example: list_all_orders_example
    list_all_orders: list_all_orders
    list_all_report_instances_example: list_all_report_instances_example
    list_all_report_instances: list_all_report_instances
    list_all_reports_example: list_all_reports_example
    list_all_reports: list_all_reports
    live_credentials_example: live_credentials_example
    live_credentials: live_credentials
    live_permissions_example: live_permissions_example
    live_permissions: live_permissions
    loyalty_programs: loyalty_programs
    member_validations_example: member_validations_example
    member_validations: member_validations
    mv_delegates_example: mv_delegates_example
    mv_delegates: mv_delegates
    orders_example: orders_example
    orders: orders
    release_notes: release_notes
    report_instances_example: report_instances_example
    report_instances: report_instances
    reports_example: reports_example
    reports: reports
    sandbox_credentials_example: sandbox_credentials_example
    sandbox_credentials: sandbox_credentials
    update_a_credit_example: update_a_credit_example
    update_a_credit: update_a_credit
    update_a_debit_example: update_a_debit_example
    update_a_debit: update_a_debit
    update_a_mv_example: update_a_mv_example
    update_a_mv: update_a_mv
    update_a_report_example: update_a_report_example
    update_a_report: update_a_report
    update_account_permissions_example: update_account_permissions_example
    update_account_permissions: update_account_permissions
    update_an_order_example: update_an_order_example
    update_an_order: update_an_order
    getting_started: getting_started
    reference_manual: reference_manual

  return Markdown
