<template>
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="section">
        <el-container class="app-container">
          <el-aside width="200px">
            <img class="logo" src="../../public/favicon.png">
          </el-aside>
          <el-container>
            <el-main>
                <el-row>
                  <el-col :span="2" ><div class="grid-content"></div></el-col>
                  <el-col :span="4" class="row-offset-height-head">
                    <el-card class="box-card">
                      <div class="grid-content title-name title-card-left title-brand">
                        aletheia
                      </div>
                      <el-row>
                        <el-col :span="8">
                          <p class="title-category">
                            Adresse
                          </p>
                          <el-row>
                            <el-col :span="24" class="space-between">
                              1234 Street Name City,
                              AA 99999
                            </el-col>
                          </el-row>
                        </el-col>
                        <el-col :span="8">
                          <p class="title-category">
                            Contact
                          </p>
                          <el-row>
                            <el-col :span="24" class="space-between">
                              +1 (0) 000 0000 001
                            </el-col>
                          </el-row>
                        </el-col>
                        <el-col :span="8">
                          <p class="title-category">
                            Team
                          </p>
                          <el-row>
                            <el-col :span="12" class="space-between subcategory">
                              Designer
                            </el-col>
                            <el-col :span="12" class="space-between subcategory">
                              Marketing
                            </el-col>
                          </el-row>
                          <el-row>
                            <el-col :span="12">
                              Camille De Wit
                            </el-col>
                            <el-col :span="12">
                              Dorinda Francisco
                            </el-col>
                          </el-row>
                          <el-row>
                            <el-col :span="24" class="space-category-between subcategory">
                              Developpeurs
                            </el-col>
                          </el-row>
                          <el-row>
                            <el-col :span="24" class="space-between-team">
                              Louis Harang
                            </el-col>
                            <el-col :span="24" class="space-between-team">
                              Valentin Varveropoulos
                            </el-col>
                            <el-col :span="24" class="space-between-team">
                              Jonathan Rakotonirina
                            </el-col>
                          </el-row>
                        </el-col>
                      </el-row>
                    </el-card>
                  </el-col>
                </el-row>
            </el-main>
          </el-container>
        </el-container>
    </div>
    <div class="section">
    </div>
    <div class="section">
      <el-container class="app-container">
        <el-aside width="200px">
          <img class="logo" src="../../public/favicon.png">
        </el-aside>
        <el-container>
          <el-main>
            <el-row>
              <el-col :span="2" ><div class="grid-content"></div></el-col>
              <el-col :span="4" class="row-offset-height">
                <div class="grid-content title-name">
                  prices
                </div>
              </el-col>
            </el-row>
          </el-main>
        </el-container>
      </el-container>
    </div>
    <div class="section">
      <el-container class="app-container">
        <el-main>
          <el-row>
            <el-col :span="6" ><div class="grid-content"></div></el-col>
            <el-col :span="6" ><div class="grid-content"></div></el-col>
            <el-col :span="8" class="row-offset-height row-offset-padding-left">
              <div class="grid-content title-name">
                Accès
              </div>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </div>
  </full-page>
  </div>
</template>

<style scoped>
.app-container{
  min-height: 100vh;
}

.title-brand{
  padding: 20px;
}

.title-name{
  text-transform: uppercase;
  font-size: 64px;
  font-weight: bold;
}

.title-category{
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
}

.subcategory{
  font-size: 0.9em;
  font-weight: bold;
}

.title-card-left{
  text-align: left;
}

.title-card-right{
  text-align: right;
}

.space-between-team{
  padding: 7px;
}
.space-between{
  padding: 15px;
}

.space-category-between{
  padding-top: 30px;
  padding-bottom: 15px;
}

.logo{
  position: fixed;
  top: 20px;
  left: 20px;
}

.box-card {
  width: 1200px;
  height: 500px;
}

.row-offset-height{
  padding-top: 375px;
}

.row-offset-height-head{
  padding-top: 200px;
}

.row-offset-padding-left{
  padding-left: 170px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>

<script>
export default {
  name: 'sources-graph',
  props: {
    layout: Function,
  },
  data() {
    return {
      options: {
        menu: '#menu',
        anchors: ['home', 'about', 'contact', 'access'],
        sectionsColor: ['#FFF', '#6EB63E', '#E5A33B', '#ED6C6D'],
      },
    };
  },

  created() {
    this.layout(false);
  },
};
</script>
