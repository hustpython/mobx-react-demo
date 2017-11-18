import {observable,action} from 'mobx';
import {useStrict} from 'mobx'
useStrict(true)
class stores {
    @observable gen={a:'ll',b:'sk'};
 
    @action add=()=>{
        this.gen.a = 'o'
    }
} 

export default new stores() 
