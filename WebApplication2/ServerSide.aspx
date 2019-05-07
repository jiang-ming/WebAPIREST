<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ServerSide.aspx.cs" Inherits="WebApplication2.ServerSide" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
     <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="Content/bootstrap.min.css" rel="stylesheet">
    <link href="Content/site.css" rel="stylesheet">
    <script src="Scripts/jquery-1.9.1.min.js"></script>
    <script src="Scripts/bootstrap.min.js"></script>
    <script src="Scripts/webapi.js"></script>
</head>
<body>
<div class="container">
    <header class="jumbotron"><%-- image set in site.css --%></header>
    <main>    
        <form id="form1" runat="server">
            <div class="row">
                <div class="col-sm-12 table-responsive">
                    <h1>Categories</h1>
                    <asp:GridView ID="grdCategories" runat="server"
                        CssClass="table table-bordered table-condensed table-striped"
                        OnPreRender="grdCategories_PreRender">
                        <HeaderStyle CssClass="bg-halloween" />
                    </asp:GridView>
                </div>
            </div>
        </form>

    </main>
</div>
</body>
</html>
