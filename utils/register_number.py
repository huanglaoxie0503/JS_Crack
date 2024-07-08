class RegisterNumber:
    TABLE = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'W', 'X', 'Y']

    @staticmethod
    def number_to_string_32(i):
        num = 0
        if i < 0:
            num = ((2 * 0x7fffffff) + i + 2)
        else:
            num = i
        return RegisterNumber.long_to_string_32(num)

    @staticmethod
    def long_to_string_32(num):
        buf = [''] * 32
        char_pos = 32
        while num >> 5 > 0:
            char_pos -= 1
            buf[char_pos] = RegisterNumber.TABLE[num % 32]
            num = num >> 5
        char_pos -= 1
        buf[char_pos] = RegisterNumber.TABLE[num % 32]
        return ''.join(buf[char_pos:])

    @staticmethod
    def string_32_to_number(s):
        return int(RegisterNumber.string_32_to_long(s))

    @staticmethod
    def string_32_to_long(s):
        num = 0
        ch = list(s)
        ch_len = len(ch)
        for i in range(ch_len):
            for j in range(32):
                if RegisterNumber.TABLE[j] == ch[i]:
                    num += j * (32 ** (ch_len - i - 1))
                    break
        return num

    @staticmethod
    def get_next_oc_number(num):
        if len(num) == 15:
            num_left = num[:14]
            try:
                new_num = int(num_left)
                new_num += 1
                return str(new_num) + str(RegisterNumber.check(str(new_num)))
            except ValueError:
                return RegisterNumber.new_num_two(num_left) + num[14]
        return ''

    @staticmethod
    def check(a):
        p = 10
        return_int = 0
        for i in range(14):
            aa = int(a[i])
            s = aa + p
            pp = ((s - 1) % 10 + 1) * 2
            p = pp % 11
        for i in range(1, 11):
            d = (p + i - 1) % 10
            if d == 1:
                return_int = i - 1
                break
        return return_int

    @staticmethod
    def new_num_two(a):
        char_term_value = 0
        char_index_value = 0
        completion_length = 0
        char_length = 0
        for i in range(14):
            if not a[i].isdigit():
                if char_index_value == 0:
                    char_index_value = i
                char_length += 1
        if char_index_value != 0:
            for j in range(char_index_value + char_length, len(a)):
                term_value = int(a[j])
                if term_value == 0:
                    completion_length += 1
                else:
                    break
            str_char = a[char_index_value:char_index_value + char_length]
            str_num = a[char_index_value + char_length:]
            try:
                int_new_num = int(str_num)
                str_new_num = ""
                int_new_num += 1
                for k in range(completion_length):
                    str_new_num += "0"
                return a[:char_index_value + char_length] + str_new_num + str(int_new_num)
            except ValueError:
                return ""
        return ""

    @staticmethod
    def get_seq_number(s):
        """从注册号获取8位顺序校验码"""
        if len(s) != 15:
            raise ValueError(f"非法的注册号长度 {len(s)}")
        seq = s[6:14]
        return seq

    @staticmethod
    def get_oc_code_from_seq(seq: str, area_code: str):
        temp = area_code + seq
        check_num = RegisterNumber.check(temp)
        return temp + str(check_num)


if __name__ == '__main__':
    # print(RegisterNumber.get_next_oc_number('440300222572416'))  # 440300201873667
    # print(RegisterNumber.get_next_oc_number('440300222548761'))  # 440300201873667
    # print(RegisterNumber.get_seq_number('440300222548761'))  # 440300201873667
    # print(RegisterNumber.get_next_oc_number('440300280600071'))  # 440300201873667
    code = RegisterNumber.get_oc_code_from_seq("31509718", "440300")
    print(code)
