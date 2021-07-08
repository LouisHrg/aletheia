<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content keyword-div">
          <el-card class="box-card-white">
            <div class="grid-content title-name title-card-left title-brand">
              aletheia
            </div>
            <el-row>
              <el-col class="col" :span="8">
                <div class="title-category">Adresse</div>
                <el-row>
                  <el-col :span="24" class="space-between">
                    1234 Street Name City,
                    AA 99999
                  </el-col>
                </el-row>
              </el-col>

              <el-col :span="8">
                <div class="col title-category">
                  Team
                </div>
                <el-row>
                  <el-col :span="12" class="col space-between title-category">
                    Designer
                  </el-col>
                  <el-col :span="12" class="col space-between title-category">
                    Marketing
                  </el-col>
                </el-row>
                <el-row>
                  <el-col class="col" :span="12">
                    Camille De Wit
                  </el-col>
                  <el-col class="col" :span="12">
                    Dorinda Francisco
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24" class="col space-category-between title-category">
                    Developpeurs
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12" class="col space-between-team">
                    Louis Harang
                  </el-col>
                  <el-col :span="12" class="col space-between-team">
                    Valentin Varveropoulos
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24" class="col space-between-team">
                    Jonathan Rakotonirina
                  </el-col>
                </el-row>
              </el-col>
              <el-col class="col" :span="8">
                <div class="title-category">Contact</div>
                <el-row>
                  <el-col :span="24" class="space-between">
                    +1 (0) 000 0000 001
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content keyword-div">
          <el-card class="box-card">
            <div>
              What We Do
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content keyword-div">
          <el-card class="box-card">
            <div>
              Prices
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content keyword-div">
          <el-card class="box-card">
            <div>
              Access
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>

.box-card{
  background-image: linear-gradient(45deg,#09C6F9,#045DE9 100%) !important;
  border-radius: .6rem !important;
  color:#fff !important;
  padding: 1.8rem !important;
  font-family: Poppins,sans-serif !important;
  font-weight: bold !important;
  text-align: left !important;
  font-size:1.5rem;
}

.box-card-white{
    background: #fff;
    border-radius: .6rem !important;
    padding: 10px 1.8rem !important;
    font-family: Poppins,sans-serif !important;
    font-weight: bold !important;
    text-align: left !important;
    -webkit-box-shadow: 0 1px 15px 1px rgba(62,57,107,.07) !important;
    box-shadow: 0 1px 15px 1px rgba(62,57,107,.07) !important;
    margin-bottom:50px;
}

.col{
  text-align: center;
}

.title-brand{
  padding: 20px;
  background: -webkit-linear-gradient(45deg,#09C6F9,#045DE9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center !important;
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
};
</script>
