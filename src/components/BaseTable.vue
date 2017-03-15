<template>
    <div>
        <table class="ui celled table">
          <thead>
            <tr><th>姓名</th>
            <th>标签</th>
            <th>地址</th>
            <th>日期</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item, index) in tableData">
              <td>{{item.name}}</td>
              <td>{{item.tag}}</td>
              <td>{{item.address}}</td>
              <td>{{item.date}}</td>
          </tr>
          </tbody>
          <tfoot>
            <tr><th colspan="4">
              <div class="ui right floated pagination menu">
                <a class="icon item">
                  <i class="left chevron icon"></i>
                </a>
                <a class="item">1</a>
                <a class="item">2</a>
                <a class="item">3</a>
                <a class="item">4</a>
                <a class="icon item">
                  <i class="right chevron icon"></i>
                </a>
              </div>
            </th>
          </tr></tfoot>
        </table>
    </div>
</template>

<script>
    export default {
        mounted: function(){
            const self = this;
            $.get('./static/mocks/tableData.json').then(function(response){
                if('00000' === response.retCode){
                    // self.$set('tableData', response.data);
                    self.$data.tableData = response.data.rows;
                }
            });
        },
        data() {
            const self = this;
            return {
               tableData: [],
               total: 0
            }
        },
        methods: {
            formatter(row, column) {
                return row.address;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            handleEdit(index, row) {
                this.$message('编辑第'+(index+1)+'行');
            },
            handleDelete(index, row) {
                this.$message.error('删除第'+(index+1)+'行');
            }
        }
    }
</script>